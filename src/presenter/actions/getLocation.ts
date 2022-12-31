import { Context } from '../presenter';
import { Position } from '../../types/Position';

const GEO_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 5000,
} as const;

export const getLocation = async (context: Context): Promise<Position> => {
  try {
    const result = await context.effects.geolocation.getCurrentPosition(
      GEO_OPTIONS,
    );
    const { coords, timestamp } = result;
    const position: Position = {
      accuracy: coords.accuracy,
      altitude: coords.altitude,
      altitudeAccuracy: coords.altitudeAccuracy,
      heading: coords.heading,
      latitude: coords.latitude,
      longitude: coords.longitude,
      speed: coords.speed,
      timestamp,
    };
    return position;
  } catch (e) {
    console.log(e as Error);
    context.actions.setError((e as Error).message);
  }
};
