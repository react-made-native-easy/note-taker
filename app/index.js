/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './assets/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

class NoteTaker extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Icon name='branch-locator' />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NoteTaker', () => NoteTaker);
export default NoteTaker;
