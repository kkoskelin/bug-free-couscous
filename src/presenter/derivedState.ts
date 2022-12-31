import { Coordinates } from '../types/Coordinates';
import { PinNearMe } from '../types/PinNearMe';
import { State } from '../types/State';
import { UnitName, Units } from '../types/Units';
import { derived } from 'overmind';
import { isEmpty, memoize, round } from 'lodash';

// TODO: try https://blog.mapbox.com/fast-geodesic-approximations-with-cheap-ruler-106f229ad016

const MathMemo = {
  atan2: memoize(Math.atan2),
  cos: memoize(Math.cos),
  pow: memoize(Math.pow),
  sin: memoize(Math.sin),
  sqrt: memoize(Math.sqrt),
  toDegrees: memoize((radians: number) => (radians * 180) / Math.PI),
  toRadians: memoize((degrees: number) => (degrees * Math.PI) / 180),
};

const haversineDistance = (
  lon1: number,
  lat1: number,
  lon2: number,
  lat2: number,
  units: number,
) => {
  const R = units; // Radius of the earth in yards
  const dLat = MathMemo.toRadians(lat2) - MathMemo.toRadians(lat1);
  const dLon = MathMemo.toRadians(lon2) - MathMemo.toRadians(lon1);
  const a =
    MathMemo.pow(MathMemo.sin(dLat / 2), 2) +
    MathMemo.cos(MathMemo.toRadians(lat1)) *
      MathMemo.cos(MathMemo.toRadians(lat2)) *
      MathMemo.pow(MathMemo.sin(dLon / 2), 2);
  const c = 2 * MathMemo.atan2(Math.sqrt(a), MathMemo.sqrt(1 - a));
  const d = R * c;
  return d;
};

const jsBearing = (lon1: number, lat1: number, lon2: number, lat2: number) => {
  lat1 = MathMemo.toRadians(lat1);
  lon1 = MathMemo.toRadians(lon1);
  lat2 = MathMemo.toRadians(lat2);
  lon2 = MathMemo.toRadians(lon2);

  const y = MathMemo.sin(lon2 - lon1) * MathMemo.cos(lat2);
  const x =
    MathMemo.cos(lat1) * MathMemo.sin(lat2) -
    MathMemo.sin(lat1) * MathMemo.cos(lat2) * MathMemo.cos(lon2 - lon1);
  let brng = MathMemo.atan2(y, x);
  brng = MathMemo.toDegrees(brng);
  return (brng + 360) % 360;
};

export const computeDistance = (
  from: Coordinates,
  to: Coordinates,
  units: UnitName,
): number => {
  const distance = haversineDistance(
    from.longitude,
    from.latitude,
    to.longitude,
    to.latitude,
    Units[units],
  );
  return round(distance, 1);
};

export const computeBearing = (from: Coordinates, to: Coordinates): number => {
  const bearing = jsBearing(
    from.longitude,
    from.latitude,
    to.longitude,
    to.latitude,
  );
  return round(bearing, 1);
};

export const surroundings = (state: State): PinNearMe[] => {
  const { currentLocation, pins, units } = state;
  const hasLocation =
    !isNaN(currentLocation?.latitude) && !isNaN(currentLocation?.longitude);

  if (!hasLocation || isEmpty(pins)) {
    return [];
  }

  const distanceAndBearing: PinNearMe[] = pins.map(pin => ({
    ...pin,
    bearing: computeBearing(currentLocation, pin),
    distance: computeDistance(currentLocation, pin, units),
  }));

  return distanceAndBearing;
};

export const locationString = (state: State): string => {
  if (!state.currentLocation) {
    return;
  }
  const { heading, latitude, longitude, timestamp } = state.currentLocation;
  const locationStr = JSON.stringify(
    {
      heading: Math.round(heading),
      latitude: latitude.toFixed(4),
      longitude: longitude.toFixed(4),
      timestamp: new Date(timestamp).toLocaleTimeString('en-US'),
    },
    null,
    2,
  );
  return locationStr;
};

export const derivedState = {
  locationString: derived(locationString),
  surroundings: derived(surroundings),
};
