import { FETCH_FAILED } from '../constants/action-types';

export const fetchFailed = errorMessage => ({
  type: FETCH_FAILED,
  payload: errorMessage,
});
