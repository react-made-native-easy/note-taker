import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
// import Notes from '../Notes/Notes.component';
import noop from 'lodash/noop';
import translate from '../../utils/language.utils';
import Touchable from '../Touchable/Touchable.component';
import TextInput from '../TextInput/TextInput.component';

class Home extends Component {
  addNote = () => {
    const {saveNote, title, text} = this.props;
    saveNote({title, text});
  }
  render () {
    const {setTitle, title, text, setText, notes, currentLanguage, toggleLanguage} = this.props;
    const flex = {display: 'flex'};
    return (
      <div style={styles.container}>
        <p style={styles.titleHeading}>{translate('HOME_noteTitle')}</p>
        <Touchable style={styles.changeLanguage} onPress={toggleLanguage}>
          <p style={styles.changeLanguageText}>{currentLanguage}</p>
        </Touchable>
        <TextInput style={{...styles.titleTextInput, ...flex}}
            onChangeText={setTitle} value={title} />
        <p style={styles.textAreaTitle}>{translate('HOME_pleaseTypeYourNote')}  </p>
        <TextInput style={{...styles.textArea, ...flex}} multiline = {true}
          onChangeText={setText} value={text}/>
        <div style={styles.bottomBar}>
          <div style={styles.bottomBarWrapper}>
            <p style={styles.saveBtn} onClick={this.addNote}>{translate('HOME_save')}</p>
            <p style={styles.characterCount}>{text.length} {translate('HOME_characters')}</p>
          </div>
        </div>
        {/* <Notes data={notes} />*/}
        <Touchable style={styles.aboutUsWrapper} onPress={this.props.onAboutPress}>
          <p style={styles.aboutUs}>{translate('ABOUT_us')}</p>
        </Touchable>
      </div>
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
