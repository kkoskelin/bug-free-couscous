import { Context } from '../presenter';
import { Position } from '../../types/Position';

export const addPin = async (context: Context) => {
  let loc: Position;
  try {
    loc = await context.actions.getLocation();
  } catch (e) {
    context.actions.setError((e as Error).message);
  }
  if (loc) {
    context.state.pins.push({
      ...loc,
      name: `Pin #${context.state.pins.length + 1}`,
    });
  }
};

export const clearPins = (context: Context) => {
  context.state.pins = [];
};
