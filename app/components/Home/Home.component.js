import React, {Component} from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import Notes from '../Notes/Notes.component';
import Touchable from '../Touchable/Touchable.component';
import noop from 'lodash/noop';
import translate from '../../utils/language.utils';

// Icon Usage
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

class Home extends Component {
  addNote = () => {
    const {saveNote, title, text} = this.props;
    saveNote({title, text});
  }
  render () {
    const {setTitle, title, text, setText, notes, currentLanguage, toggleLanguage} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeading}>{translate('HOME_noteTitle')}</Text>
        <Touchable style={styles.changeLanguage} onPress={toggleLanguage}>
          <Text style={styles.changeLanguageText}>{currentLanguage}</Text>
        </Touchable>
        <TextInput style={styles.titleTextInput}
            onChangeText={setTitle} value={title} />
        <Text style={styles.textAreaTitle}>{translate('HOME_pleaseTypeYourNote')}  <Icon name='notepad' size={15}/></Text>
        <TextInput style={styles.textArea} multiline = {true}
          onChangeText={setText} value={text}/>
        <KeyboardAvoidingView style={styles.bottomBar}>
          <View style={styles.bottomBarWrapper}>
            <Text style={styles.saveBtn} onPress={this.addNote}>{translate('HOME_save')}</Text>
            <Text style={styles.characterCount}>{text.length} {translate('HOME_characters')}</Text>
          </View>
        </KeyboardAvoidingView>
        <Notes data={notes} />
        <Touchable style={styles.aboutUsWrapper} onPress={this.props.onAboutPress}>
          <Text style={styles.aboutUs}>{translate('ABOUT_us')}</Text>
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
  onAboutPress: PropTypes.func,
  setText: PropTypes.func,
  toggleLanguage: PropTypes.func,
  title: PropTypes.string,
  saveNote: PropTypes.func,
  notes: PropTypes.array,
  currentLanguage: PropTypes.string,
  text: PropTypes.string
};

export default Home;
