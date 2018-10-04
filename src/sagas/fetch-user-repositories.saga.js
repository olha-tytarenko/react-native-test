import { put, call } from 'redux-saga/effects';

import { fetchFailed } from '../actions/fetch-failde';
import { setUserRepositories } from '../actions/set-user-repositories';
import { fetchUserRepositoriesUrl } from '../constants/urls';

export function* fetchRepositories(action) {
  console.log(fetchUserRepositoriesUrl);
  try {
    const response = yield call(fetch, fetchUserRepositoriesUrl(action.payload));
    yield put(setUserRepositories(JSON.parse(response._bodyText)));
  } catch (e) {
    yield put(fetchFailed(e));
    return;
  }
}
