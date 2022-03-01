import { describe, expect, it } from '@jest/globals';
import { overmindApp } from './presenter';

describe('Presenter', () => {
  it('getUsers', async () => {
    expect(overmindApp.state.userList.length).toBe(0);
    await overmindApp.actions.displayUserList();
    expect(overmindApp.state.userList.length).toBe(6);
  });
});
