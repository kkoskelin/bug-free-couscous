import { Context } from '../presenter';

export const displaySplash = async (context: Context) => {
  context.state.currentPage = 'Splash';
};
