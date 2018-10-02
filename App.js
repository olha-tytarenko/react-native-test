import React, {Component} from 'react';
import {ThemeProvider } from 'styled-components';
import {theme} from './styles/theme';
import {HomeScreen, RepositoriesScreen, GistsScreen} from './src/screens';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
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
      <RootStack />
    );
  }
}
