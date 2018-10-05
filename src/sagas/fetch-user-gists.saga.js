import { put, call } from 'redux-saga/effects';

import { fetchFailed } from '../actions/fetch-failde';
import { setUserData } from '../actions/set-user-data';
import { fetchUserGistsUrl } from '../constants/urls';

export function* fetchGists(action) {
  try {
    const response = yield call(fetch, fetchUserGistsUrl(action.pasyload));
    console.log(JSON.parse(response._bodyText));
    yield put(setUserData(JSON.parse(response._bodyText)));
  } catch (e) {
    console.log(e);
    yield put(fetchFailed(e));
    return;
  }
}
