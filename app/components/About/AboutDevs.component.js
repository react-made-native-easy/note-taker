import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './AboutDevs.styles.js';
import translate from '../../utils/language.utils';

class AboutDevs extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>{translate('ABOUT_theCreatorsDesc')}</Text>
      </View>
    );
  }
}

AboutDevs.defaultProps = {
};
AboutDevs.propTypes = {
};

export default AboutDevs;
