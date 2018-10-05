import { SET_USER_DATA } from '../constants/action-types';

export const setUserData = data => ({
  type: SET_USER_DATA,
  payload: data,
});
