import { SET_USER_REPOSITORIES } from '../constants/action-types';

export const setUserRepositories = repositories => ({
  type: SET_USER_REPOSITORIES,
  payload: repositories,
});
