import { PinNearMe } from '../types/PinNearMe';
import { State } from '../types/State';
import { state as initialState } from './state';
import { locationString, surroundings } from './derivedState';

describe('derived state', () => {
  describe('locationString', () => {
    it('returns nothing if current location is undefined', () => {
      const state: State = { ...initialState, currentLocation: undefined };
      const result = locationString(state);
      expect(result).toBeUndefined();
    });
    it('returns a string if location is defined', () => {
      const result = locationString(initialState);
      expect(result).toContain('latitude');
    });
  });

  describe('surroundings', () => {
    it('returns an empty array if current location is undefined', () => {
      const state: State = { ...initialState, currentLocation: undefined };
      const result = surroundings(state);
      expect(result).toEqual([]);
    });

    it('returns an empty array if pins collection is empty', () => {
      const state: State = { ...initialState, pins: undefined };
      const result = surroundings(state);
      expect(result).toEqual([]);
    });

    it('returns an array if pins collection is not empty', () => {
      const result: PinNearMe[] = surroundings(initialState);
      expect(result.length).toEqual(initialState.pins.length);
      const first = result[0];
      expect(first).toMatchObject({
        bearing: expect.any(Number) as number,
        distance: expect.any(Number) as number,
        latitude: expect.any(Number) as number,
        longitude: expect.any(Number) as number,
        name: expect.any(String) as string,
      } as PinNearMe);
    });
  });
});
