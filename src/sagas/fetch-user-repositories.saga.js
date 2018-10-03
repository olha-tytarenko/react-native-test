import { takeEvery, put, call } from 'redux-saga/effects';

import {fetchFailed} from '../actions/fetch-failde';
import {setGithubUsers} from '../actions/set-github-users';
import {FETCH_REPOSITORIES_URL} from '../constants/urls';
import {FETCH_USERSET_REPOSITORIES} from '../constants/action-types';

function* fetchRecords(action) {
  let responseBody;
  try {
      const response = yield call(fetch, FETCH_REPOSITORIES_URL(action.payload));
      yield put(setGithubUsers(JSON.parse(response._bodyText)));
  } catch (e) {
      yield put(fetchFailed(e));
      return;
  }
}

export function* fetchGithubUsers() {
  yield takeEvery(FETCH_USERSET_REPOSITORIES, fetchRecords);
}
