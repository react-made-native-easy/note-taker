import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setTitle, setText} from '../redux/actions/index.actions';
import {toggleLanguage} from '../redux/thunks/index.thunks';
import Home from '../components/Home/Home.component';
import {NavigationActions} from 'react-navigation';

class HomePage extends Component {
  render () {
    const {setTitle, setText, title, text, currentLanguage, toggleLanguage} = this.props;
    return (
      <Home setTitle={setTitle} toggleLanguage={toggleLanguage} currentLanguage={currentLanguage} setText={setText} title={title} text={text} onAboutPress={this.props.onAboutPress}/>
    );
  }
 }

HomePage.propTypes = {
  setTitle: PropTypes.func,
  setText: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  currentLanguage: PropTypes.string,
  onAboutPress: PropTypes.func,
  toggleLanguage: PropTypes.func
};

const mapStateToProps = (state) => ({
  title: state.content.title,
  text: state.content.text,
  currentLanguage: state.userPreferences.language
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (title) => dispatch(setTitle(title)),
  setText: (text) => dispatch(setText(text)),
  onAboutPress: () => dispatch(NavigationActions.navigate({routeName: 'about', params: {navigatingFrom: 'Home'}})),
  toggleLanguage: () => dispatch(toggleLanguage())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
