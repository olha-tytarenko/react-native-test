import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {ThemeProvider } from 'styled-components';
import {theme} from './styles/theme';
import {RepositoriesScreen, GistsScreen} from './src/screens';
import {HomeScreenContainer} from './src/screens/home/container';
import { createStackNavigator } from 'react-navigation';
import { fetchGithubUsers } from './src/sagas/fetch-github-users.saga';
import {usersReduncer} from './src/reducers/users-reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  usersReduncer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(fetchGithubUsers);

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreenContainer,
    navigationOptions: () => ({
      title: 'Home',
      headerBackTitle: null
    }),
  },
  Repositories: {
    screen: RepositoriesScreen,
    navigationOptions: () => ({
      title: 'Repositories',
      headerBackTitle: 'Home'
    }),
  },
  Gists: {
    screen: GistsScreen,
    navigationOptions: () => ({
      title: 'Gists',
      headerBackTitle: 'Home'
    }),
  },
},
{
  initialRouteName: 'Home',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
