import {TabNavigator} from 'react-navigation';
import AboutApp from '../components/About/AboutApp.component';
import AboutDevs from '../components/About/AboutDevs.component';
import {aboutRoutesConfig} from '../config/routes.config';
import translate from '../utils/language.utils';

export default TabNavigator({
  aboutApp: {
    screen: AboutApp,
    navigationOptions: {
      title: translate('ABOUT_theApp')
    }
  },
  aboutDevs: {
    screen: AboutDevs,
    navigationOptions: {
      title: translate('ABOUT_theCreators')
    }
  }
}, aboutRoutesConfig);
