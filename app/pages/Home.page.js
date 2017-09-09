import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Home from '../components/Home/Home.component';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

class HomePage extends Component {
  render () {
    return <Home onAboutPress={this.props.onAboutPress}/>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAboutPress: () => {
    dispatch(NavigationActions.navigate({routeName: 'about', params: {navigatingFrom: 'Home'}}));
  }
});

HomePage.propTypes = {
  onAboutPress: PropTypes.func
};

export default connect(null, mapDispatchToProps)(HomePage);
