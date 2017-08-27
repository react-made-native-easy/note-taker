import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Home from '../components/Home/Home.component';

class HomePage extends Component {
  onAboutPress = () => {
    this.props.navigation.navigate('about');
  }
  render () {
    return <Home onAboutPress={this.onAboutPress}/>;
  }
}

HomePage.propTypes = {
  navigation: PropTypes.object
};
export default HomePage;
