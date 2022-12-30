import { Coordinates } from '../types/Coordinates';
import { PinNearMe } from '../types/PinNearMe';
import { State } from '../types/State';
import { UnitName, Units } from '../types/Units';
import { derived } from 'overmind';
import { isEmpty, memoize, round } from 'lodash';

// Converts from degrees to radians.
const toRadians = memoize((degrees: number) => {
  return (degrees * Math.PI) / 180;
});

// Converts from radians to degrees.
const toDegrees = memoize((radians: number) => {
  return (radians * 180) / Math.PI;
});

const haversineDistance = (
  lon1: number,
  lat1: number,
  lon2: number,
  lat2: number,
  units: number,
) => {
  const R = units; // Radius of the earth in yards
  const dLat = ((lat2 - lat1) * Math.PI) / 180; // Javascript functions in radians
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

const jsBearing = (lon1: number, lat1: number, lon2: number, lat2: number) => {
  lat1 = toRadians(lat1);
  lon1 = toRadians(lon1);
  lat2 = toRadians(lat2);
  lon2 = toRadians(lon2);

  const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
  let brng = Math.atan2(y, x);
  brng = toDegrees(brng);
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
  return [];
  // const { currentLocation, pins, units } = state;
  // const hasLocation =
  //   !isNaN(currentLocation?.latitude) && !isNaN(currentLocation?.longitude);

  // if (!hasLocation || isEmpty(pins)) {
  //   return [];
  // }

  // const distanceAndBearing: PinNearMe[] = pins.map(pin => ({
  //   ...pin,
  //   bearing: computeBearing(currentLocation, pin),
  //   distance: computeDistance(currentLocation, pin, units),
  // }));

  // return distanceAndBearing;
};

export const locationString = (state: State): string => {
  if (!state.currentLocation) {
    return;
  }
  const { heading, latitude, longitude } = state.currentLocation;
  const locationStr = JSON.stringify({ heading, latitude, longitude });
  return locationStr;
};

export const derivedState = {
  locationString: derived(locationString),
  surroundings: derived(surroundings),
};
