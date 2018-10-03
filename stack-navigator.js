import { RepositoriesScreen, GistsScreen } from './src/screens';
import { HomeScreenContainer } from './src/screens/home/container';
import { createStackNavigator } from 'react-navigation';

export const RootStack = createStackNavigator({
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
  }
);
