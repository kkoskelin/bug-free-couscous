import { overmindApp } from '../presenter';

const { actions, state } = overmindApp;

describe('displayLoading', () => {
  it('sets current page to Loading page', async () => {
    expect(state.currentPage).not.toBe('Loading');
    await actions.displayLoading();
    expect(state.currentPage).toBe('Loading');
  });
});
