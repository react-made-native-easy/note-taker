import React, {Component} from 'react';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';
import {NativeModules} from 'react-native';
import offlineStorage from './utils/offline.utils.js';
import {populateNotes} from './redux/actions/index.actions.js';
import App from './App.container';

const store = initStore();

// TODO: Move it to appSetup thunk
offlineStorage.get(offlineStorage.keys.NOTES).then((notes) => {
  if (notes && notes.length > 0) {
    store.dispatch(populateNotes(notes));
  }
});

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
