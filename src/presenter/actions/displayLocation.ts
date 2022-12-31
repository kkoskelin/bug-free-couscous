import { Context } from '../presenter';

export const displayLocation = async (context: Context) => {
  let loc;
  try {
    loc = await context.actions.getLocation();
  } catch (e) {
    console.log(e as Error);
    context.actions.setError((e as Error).message);
  }
  context.state.currentLocation = { ...loc, heading: 0 };
  context.state.currentPage = 'Location';
};
