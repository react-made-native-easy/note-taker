import {StackNavigator} from 'react-navigation';
import HomePage from '../pages/Home.page';
import AboutRoutes from './about.routes.js';
import {translateHeaderText} from '../utils/language.utils';

const Router = StackNavigator({
  home: {
    screen: HomePage,
    navigationOptions: translateHeaderText('HOME_startTakingNotes')
  },
  about: {
    screen: AboutRoutes
  }
});

export default Router;
