import { Context } from '../presenter';

export const displayLoading = async (context: Context) => {
  context.state.currentPage = 'Loading';
};
