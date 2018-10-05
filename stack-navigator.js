import { GistsScreen } from './src/screens';
import { HomeScreenContainer } from './src/screens/home/container';
import { RepositoriesScreenContainer } from './src/screens/repositories/container'
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
    screen: RepositoriesScreenContainer,
    navigationOptions: () => ({
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
