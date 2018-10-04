import { takeEvery, put, call } from 'redux-saga/effects';

import {fetchFailed} from '../actions/fetch-failde';
import {setGithubUsers} from '../actions/set-github-users';
import {USERS_URL} from '../constants/urls';
import {FETCH_USERS} from '../constants/action-types';

export function* fetchUsers() {
  try {
      const response = yield call(fetch, USERS_URL);
      yield put(setGithubUsers(JSON.parse(response._bodyText)));
  } catch (e) {
      yield put(fetchFailed(e));
      return;
  }
}
