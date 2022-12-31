import { Context } from '../presenter';

export const updateLocation = async (context: Context) => {
  context.state.currentLocation = await context.actions.getLocation();
};
