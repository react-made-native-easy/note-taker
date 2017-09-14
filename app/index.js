import React, {Component} from 'react';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';
import {NativeModules} from 'react-native';

import App from './App.container';

const store = initStore();

class NoteTaker extends Component {
  render () {
    NativeModules.Device.getDeviceName((err, name) => console.log(err, name)); //eslint-disable-line
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default NoteTaker;
