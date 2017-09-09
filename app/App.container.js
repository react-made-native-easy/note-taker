import React, {Component} from 'react';
import Home from './pages/Home.page';
import {connect} from 'react-redux';

class App extends Component {
  render () {
    return (
      <Home />
    );
  }
}

export default connect(null, null)(App);
