import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './AboutApp.styles.js';
import translate from '../../utils/language.utils';

class AboutApp extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>{translate('ABOUT_theAppDesc')}</Text>
      </View>
    );
  }
}

AboutApp.defaultProps = {
};
AboutApp.propTypes = {
};

export default AboutApp;
