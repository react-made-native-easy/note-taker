import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './About.page.styles.js';

class AboutPage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>About View </Text>
      </View>
    );
  }
}

AboutPage.defaultProps = {
};
AboutPage.propTypes = {
};

export default AboutPage;
