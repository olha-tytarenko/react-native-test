export const usersReduncer = (state = { users: [] }, action = {}) => {
  switch (action.type) {
    case 'FETCH_FAILED':
      return {
        ...state,
        users: []
      };
    case 'SET_GITHUB_USERS':
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
