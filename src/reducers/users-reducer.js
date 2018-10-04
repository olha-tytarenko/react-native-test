import * as actionTypes from '../constants/action-types';

export const usersReduncer = (state = { users: [] }, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        users: [],
      };
    case actionTypes.SET_GITHUB_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case actionTypes.SET_USER_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };
    case actionTypes.CLEAN_USER_REPOSITORIES:
      return {
        ...state,
        repositories: [],
      };
    default:
      return state;
  }
};
