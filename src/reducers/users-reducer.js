import * as actionTypes from '../constants/action-types';

const defaulState = {
  users: [],
  data: [],
  isDataLoaded: false,
};

export const usersReduncer = (state = defaulState, action = {}) => {
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
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        data: action.payload,
        isDataLoaded: true,
      };
    case actionTypes.CLEAN_USER_DATA:
      return {
        ...state,
        data: [],
        isDataLoaded: false,
      };
    default:
      return state;
  }
};
