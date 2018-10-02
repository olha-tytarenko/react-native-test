import { Navigation } from 'react-native-navigation';

import {GistsScreen} from './src/screens/gists/gists';
import {RepositoriesScreen} from './src/screens/repositories/repositories';
import {HomeScreen} from './App';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.GistsScreen', () => GistsScreen);
  Navigation.registerComponent('example.RepositoriesScreen', () => RepositoriesScreen);
  Navigation.registerComponent('example.HomeScreen', () => HomeScreen);
}
