import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './AboutDevs.styles.js';
import result from 'lodash/result';

class AboutDevs extends Component {
  render () {
    const navigatingFrom = result(this.props, 'navigation.state.params.navigatingFrom', '');
    return (
      <View style={styles.container}>
        <Text>About the Creators </Text>
        {navigatingFrom ? <Text>Navigating from: {navigatingFrom} </Text> : null}
      </View>
    );
  }
}

AboutDevs.defaultProps = {
};
AboutDevs.propTypes = {
};

export default AboutDevs;
