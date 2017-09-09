import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setTitle, setText} from '../redux/actions/index.actions';
import Home from '../components/Home/Home.component';

class HomePage extends Component {
  onAboutPress = () => {
    this.props.navigation.navigate('about');
  }
  render () {
    const {setTitle, setText, title, text} = this.props;
    return (
      <Home setTitle={setTitle} onAboutPress={this.onAboutPress} setText={setText} title={title} text={text} />
    );
  }
 }

HomePage.propTypes = {
  setTitle: PropTypes.func,
  setText: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  navigation: PropTypes.object
};

const mapStateToProps = (state) => ({
  title: state.content.title,
  text: state.content.text
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (title) => dispatch(setTitle(title)),
  setText: (text) => dispatch(setText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
