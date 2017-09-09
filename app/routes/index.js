import {StackNavigator, TabNavigator} from 'react-navigation';
import HomePage from '../pages/Home.page';
import AboutApp from '../components/About/AboutApp.component';
import AboutDevs from '../components/About/AboutDevs.component';

const AboutRoutes = TabNavigator({
  aboutApp: {
    screen: AboutApp,
    navigationOptions: {
      title: 'About the App'
    }
  },
  aboutDevs: {
    screen: AboutDevs,
    navigationOptions: {
      title: 'About the Creators'
    }
  }
}, {
  tabBarOptions: {
    upperCaseLabel: false,
    showIcon: false
  },
  swipeEnabled: true,
  animationEnabled: true
});

const Router = StackNavigator({
  home: {screen: HomePage,
    navigationOptions: {
      title: 'Start taking notes',
    }
  },
  about: {
    screen: AboutRoutes
  }
}, {
  mode: 'card'
});

export default Router;
