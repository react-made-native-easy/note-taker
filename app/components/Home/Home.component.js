import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component';
import Touchable from 'react-native-platform-touchable';
import noop from 'lodash/noop';

// Icon Usage
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

class Home extends Component {
  state = {
    title: '' // adding the state here temporarily for illustration purposes
  }
  setTitle = (title) => this.setState({title})
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeading}> Note Title</Text>
        <TextInput style={styles.titleTextInput}
          onChangeText={this.setTitle} value={this.state.title} />
        <Text style={styles.textAreaTitle}> Please type your note below  <Icon name='notepad' size={15}/></Text>
        <TextArea style={styles.textArea}/>
        <Touchable onPress={this.props.onAboutPress}>
          <Text style={styles.aboutUs}>About Us</Text>
        </Touchable>
      </View>
    );
  }
}

Home.defaultProps = {
  onAboutPress: noop
};
Home.propTypes = {
  onAboutPress: PropTypes.func
};

export default Home;
