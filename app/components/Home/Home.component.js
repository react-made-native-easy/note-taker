import React, { Component } from 'react';
import { TextInput, View ,Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Please enter your note here</Text>
        <TextArea />
      </View>
    );
  }
}

export default Home;
