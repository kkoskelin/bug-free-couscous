import { Position } from '../../types/Position';
import { overmindApp } from '../presenter';
import { pins } from '../pins';

const { actions, state } = overmindApp;

const mockLocation: Position = {
  latitude: 45,
  longitude: -82,
};

describe('addPin', () => {
  const getLocationMock = jest.fn().mockResolvedValue(mockLocation);
  const setErrorMock = jest.fn();

  beforeEach(() => {
    state.pins = [];
  });
  beforeAll(() => {
    actions.getLocation = getLocationMock;
    actions.setError = setErrorMock;
  });

  it('adds a pin to the existing list of pins', async () => {
    await actions.addPin();
    expect(getLocationMock).toHaveBeenCalled();
    expect(state.pins.length).toBe(1);
    expect(state.pins[0]).toMatchObject(mockLocation);
  });

  it('sets error message if location cannot be fetched', async () => {
    getLocationMock.mockRejectedValueOnce(new Error('no location data'));
    await actions.addPin();
    expect(setErrorMock).toHaveBeenCalled();
    expect(state.pins.length).toBe(0);
  });
});

describe('clearPins', () => {
  it('clears pins', () => {
    state.pins = pins;

    expect(state.pins.length).toBeGreaterThan(0);
    actions.clearPins();
    expect(state.pins.length).toBe(0);
  });
});
