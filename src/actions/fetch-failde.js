export const fetchFailed = errorMessage => ({
  type: 'FETCH_FAILED',
  payload: errorMessage,
});
