import React, {Component} from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import Notes from '../Notes/Notes.component';
import Touchable from 'react-native-platform-touchable';
import noop from 'lodash/noop';

// Icon Usage
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

class Home extends Component {
  addNote = () => {
    const {saveNote, title, text} = this.props;
    if (title && text) {
      saveNote({title, text});
    }
  }
  render () {
    const {setTitle, title, text, setText, notes} = this.props;
    return (
      <View style={styles.container}>

        <Text style={styles.titleHeading}> Note Title</Text>
        <TextInput style={styles.titleTextInput}
            onChangeText={setTitle} value={title} />
        <Text style={styles.textAreaTitle}> Please type your note below  <Icon name='notepad' size={15}/></Text>
        <TextInput style={styles.textArea} multiline = {true}
          onChangeText={setText} value={text}/>
        <KeyboardAvoidingView style={styles.bottomBar}>
          <View style={styles.bottomBarWrapper}>
            <Text style={styles.saveBtn} onPress={this.addNote}>Save</Text>
            <Text style={styles.characterCount}>{text.length} characters</Text>
          </View>
        </KeyboardAvoidingView>
        <Notes data={notes} />
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
  saveNote: PropTypes.func,
  notes: PropTypes.array,
  onAboutPress: PropTypes.func,
  text: PropTypes.string
};

export default Home;
