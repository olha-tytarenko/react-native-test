import { FETCH_USER_REPOSITORIES } from '../constants/action-types';

export const fetchUserRepositories = userLogin => ({
  type: FETCH_USER_REPOSITORIES,
  payload: userLogin,
});
