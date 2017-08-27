import React, {Component} from 'react';
import Router from './routes';
import {connect} from 'react-redux';

class App extends Component {
  render () {
    return (
      <Router />
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
