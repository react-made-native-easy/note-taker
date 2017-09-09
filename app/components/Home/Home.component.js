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
  render () {
    const {setTitle, title, text, setText} = this.props;
    return (
      <View style={styles.container}>

        <Text style={styles.titleHeading}> Note Title</Text>
        <TextInput style={styles.titleTextInput}
            onChangeText={setTitle} value={title} />
        <Text style={styles.textAreaTitle}> Please type your note below  <Icon name='notepad' size={15}/></Text>
        <TextArea text={text} onTextChange={setText} style={styles.textArea}/>
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarWrapper}>
            <Text style={styles.saveBtn}>Save</Text>
            <Text style={styles.characterCount}>{text.length} characters</Text>
          </View>
        </View>
        <Touchable style={styles.aboutUsWrapper} onPress={this.props.onAboutPress}>
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
  setTitle: PropTypes.func,
  setText: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  onAboutPress: PropTypes.func
};

export default Home;
