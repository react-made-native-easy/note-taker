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

export default connect(null, null)(App);
