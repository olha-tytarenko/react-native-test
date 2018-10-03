import * as actionTypes from '../constants/action-types';

export const usersReduncer = (state = { users: [] }, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        users: []
      };
    case actionTypes.SET_GITHUB_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
