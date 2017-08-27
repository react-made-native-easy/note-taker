import {StackNavigator} from 'react-navigation';
import HomePage from '../pages/Home.page';
import AboutPage from '../pages/About.page';

const Router = StackNavigator({
  home: {screen: HomePage,
    navigationOptions: {
      title: 'Start taking notes',
    }
  },
  about: {
    screen: AboutPage
  }
}, {
  mode: 'card'
});

export default Router;
