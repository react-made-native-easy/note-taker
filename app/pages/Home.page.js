import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setTitle, setText} from '../redux/actions/index.actions';
import Home from '../components/Home/Home.component';
import {NavigationActions} from 'react-navigation';

class HomePage extends Component {
  onAboutPress = () => {
    this.props.navigation.navigate('about');
  }
  render () {
    const {setTitle, setText, title, text} = this.props;
    return (
      <Home setTitle={setTitle} setText={setText} title={title} text={text} onAboutPress={this.props.onAboutPress}/>
    );
  }
 }

HomePage.propTypes = {
  setTitle: PropTypes.func,
  setText: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  onAboutPress: PropTypes.func
};

const mapStateToProps = (state) => ({
  title: state.content.title,
  text: state.content.text
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (title) => dispatch(setTitle(title)),
  setText: (text) => dispatch(setText(text)),
  onAboutPress: () => dispatch(NavigationActions.navigate({routeName: 'about', params: {navigatingFrom: 'Home'}}))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
