import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setTitle, setText, addNote} from '../redux/actions/index.actions';
import Home from '../components/Home/Home.component';
import offlineStorage from '../utils/offline.utils.js';
import {NavigationActions} from 'react-navigation';

class HomePage extends Component {
  render () {
    const {setTitle, setText, title, text, saveNote, notes} = this.props;
    return (
      <Home setTitle={setTitle} saveNote={saveNote} notes={notes} setText={setText} title={title} text={text} onAboutPress={this.props.onAboutPress}/>
    );
  }
 }

HomePage.propTypes = {
  setTitle: PropTypes.func,
  setText: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  navigation: PropTypes.object,
  onAboutPress: PropTypes.func,
  saveNote: PropTypes.func,
  notes: PropTypes.array
};

const mapStateToProps = (state) => ({
  title: state.content.title,
  text: state.content.text,
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (title) => dispatch(setTitle(title)),
  setText: (text) => dispatch(setText(text)),
  saveNote: (note) => {
    dispatch(addNote(note));
    dispatch(setTitle(''));
    dispatch(setText(''));
    offlineStorage.addNote(note);
  },
  onAboutPress: () => dispatch(NavigationActions.navigate({routeName: 'about', params: {navigatingFrom: 'Home'}}))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
