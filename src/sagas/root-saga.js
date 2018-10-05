import { takeEvery, all } from 'redux-saga/effects';
import { fetchRepositories } from './fetch-user-repositories.saga';
import { fetchUsers } from './fetch-github-users.saga';
import { fetchGists } from './fetch-user-gists.saga';
import { FETCH_USER_REPOSITORIES, FETCH_USERS, FETCH_USER_GISTS } from '../constants/action-types';

export function* rootSaga() {
  
  yield all([
    takeEvery(FETCH_USERS, fetchUsers),
    takeEvery(FETCH_USER_REPOSITORIES, fetchRepositories),
    takeEvery(FETCH_USER_GISTS, fetchGists),
  ]);
}
