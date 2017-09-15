import {StackNavigator} from 'react-navigation';
import HomePage from '../pages/Home.page';
import AboutRoutes from './about.routes.js';

const Router = StackNavigator({
  home: {
    screen: HomePage,
    navigationOptions: {
      title: 'Start taking notes',
    }
  },
  about: {
    screen: AboutRoutes
  }
});

export default Router;
