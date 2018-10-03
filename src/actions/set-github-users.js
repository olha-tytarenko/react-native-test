import { SET_GITHUB_USERS } from '../constants/action-types';

export const setGithubUsers = users => ({
  type: SET_GITHUB_USERS,
  payload: users,
});
