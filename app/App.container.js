import React, {Component} from 'react';
import Home from './components/Home/Home.component';
import {connect} from 'react-redux';

class App extends Component {
  render () {
    return (
      <Home />
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
