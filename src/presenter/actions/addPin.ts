import { Context } from '../presenter';

export const addPin = async (context: Context) => {
  let loc;
  try {
    loc = await context.actions.getLocation();
  } catch (e) {
    console.log(e as Error);
    context.actions.setError((e as Error).message);
  }
  context.state.pins.push({
    ...loc,
    name: `Pin #${context.state.pins.length + 1}`,
  });
};

export const clearPins = (context: Context) => {
  context.state.pins = [];
};
