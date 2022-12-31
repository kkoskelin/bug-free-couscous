import { Context } from '../presenter';

export const setError = (context: Context, error: string) => {
  context.state.error = error;
};
