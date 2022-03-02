import { overmindApp } from '../presenter';

const { actions, state } = overmindApp;

describe('displaySplash', () => {
  it('sets current page to Splash from Loading page', async () => {
    await actions.displayLoading();
    expect(state.currentPage).toBe('Loading');
    await actions.displaySplash();
    expect(state.currentPage).toBe('Splash');
  });
});
