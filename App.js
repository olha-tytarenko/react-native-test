import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {ThemeProvider } from 'styled-components';
import {theme} from './styles/theme';
import { fetchGithubUsers } from './src/sagas/fetch-github-users.saga';
import {usersReduncer} from './src/reducers/users-reducer';
import {RootStack} from './stack-navigator';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  usersReduncer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(fetchGithubUsers);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RootStack />
        </Provider>
      </ThemeProvider>
    );
  }
}
