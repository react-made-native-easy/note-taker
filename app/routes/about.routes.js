import {TabNavigator} from 'react-navigation';
import AboutApp from '../components/About/AboutApp.component';
import AboutDevs from '../components/About/AboutDevs.component';
import {aboutRoutesConfig} from '../config/routes.config';

export default TabNavigator({
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
}, aboutRoutesConfig);
