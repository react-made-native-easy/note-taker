import {StackNavigator, TabNavigator} from 'react-navigation';
import HomePage from '../pages/Home.page';
import AboutApp from '../components/About/AboutApp.component';
import AboutDevs from '../components/About/AboutDevs.component';
import theme from '../styles/theme.style.js';

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
    showIcon: false,
    style: {
      backgroundColor: 'white'
    },
    activeTintColor: theme.ACTIVE_TAB_COLOR,
    inactiveTintColor: theme.INACTIVE_TAB_COLOR,
    labelStyle: {
      fontSize: 14
    }
  },
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',

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
