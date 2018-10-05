import { FETCH_USER_GISTS } from '../constants/action-types';

export const fetchUserGists = userLogin => ({
  type: FETCH_USER_GISTS,
  payload: userLogin,
});
