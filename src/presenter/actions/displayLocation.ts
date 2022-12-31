import { Context } from '../presenter';

export const displayLocation = async (context: Context) => {
  const loc = await context.actions.getLocation();
  if (loc) {
    context.state.currentLocation = { ...loc, heading: 0 };
  }
  context.state.currentPage = 'Location';
};
