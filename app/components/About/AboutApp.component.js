import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './AboutApp.styles.js';
import result from 'lodash/result';

class AboutApp extends Component {
  render () {
    const navigatingFrom = result(this.props, 'navigation.state.params.navigatingFrom', '');
    return (
      <View style={styles.container}>
        <Text>About the App </Text>
        {navigatingFrom ? <Text>Navigating from: {navigatingFrom} </Text> : null}
      </View>
    );
  }
}

AboutApp.defaultProps = {
};
AboutApp.propTypes = {
};

export default AboutApp;
