import { takeEvery, put, call } from 'redux-saga/effects';

import {fetchFailed} from '../actions/fetch-failde';
import {setGithubUsers} from '../actions/set-github-users';

function* fetchRecords() {
  let responseBody;
  try {
      const response = yield call(fetch, 'https://api.github.com/users');
      yield put(setGithubUsers(JSON.parse(response._bodyText)));
  } catch (e) {
      yield put(fetchFailed(e));
      return;
  }
}

export function* fetchGithubUsers() {
  yield takeEvery('FETCH_USERS', fetchRecords);
}