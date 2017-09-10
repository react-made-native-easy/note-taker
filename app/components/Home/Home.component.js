import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component';
import Touchable from 'react-native-platform-touchable';
import noop from 'lodash/noop';
import translate from '../../utils/language.utils';

// Icon Usage
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

class Home extends Component {
  render () {
    const {setTitle, title, text, setText, currentLanguage, toggleLanguage} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeading}>{translate('HOME_noteTitle')}</Text>
        <Touchable style={styles.changeLanguage} onPress={toggleLanguage}>
          <Text style={styles.changeLanguageText}>{currentLanguage}</Text>
        </Touchable>
        <TextInput style={styles.titleTextInput}
            onChangeText={setTitle} value={title} />
        <Text style={styles.textAreaTitle}>{translate('HOME_pleaseTypeYourNote')}  <Icon name='notepad' size={15}/></Text>
        <TextArea text={text} onTextChange={setText} style={styles.textArea}/>
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarWrapper}>
            <Text style={styles.saveBtn}>{translate('HOME_save')}</Text>
            <Text style={styles.characterCount}>{text.length} {translate('HOME_characters')}</Text>
          </View>
        </View>
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
  text: PropTypes.string,
  currentLanguage: PropTypes.string,

};

export default Home;
