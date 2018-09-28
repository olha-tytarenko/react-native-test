import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import {ThemeProvider } from 'styled-components';
import {Header} from './src/components/header/header';
import {GistsScreen, RepositoriesScreen} from './src/screens';
import {theme} from './theme';
import * as routes from './constants/routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <NativeRouter>
        <View>
            <Header title="Main page" />
            <Link
              to={routes.GISTS}
            >
              <Text>Gists</Text>
            </Link>
            <Link
              to={routes.REPOSITORIES}
            >
              <Text>Repositories</Text>
            </Link>
        </View>
        <Route path={routes.GISTS} component={GistsScreen}/>
        <Route path={routes.REPOSITORIES} component={RepositoriesScreen}/>
      </NativeRouter>
      </ThemeProvider>
    );
  }
}
