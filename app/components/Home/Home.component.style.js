import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {headingText, textInput} from '../../styles/common.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.CONTAINER_PADDING,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  titleHeading: {
    ...headingText,
  },
  changeLanguageText: {
    ...headingText,
    alignSelf: 'center',
    padding: 0,
  },
  changeLanguage: {
    elevation: 2,
    position: 'absolute',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    padding: 10,
    borderRadius: 5,
    top: 15,
    width: 40,
    right: 10,
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR_LIGHT
  },
  titleTextInput: {
    ...textInput
  },
  textAreaTitle: {
    ...headingText,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    fontStyle: 'italic'
  },
  textArea: {
    ...textInput,
    flex: 1
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottomBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  saveBtn: {
    padding: 10,
    fontWeight: theme.FONT_WEIGHT_BOLD
  },
  characterCount: {
    padding: 10,
    fontSize: theme.FONT_SIZE_SMALL
  },
  aboutUsWrapper: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  aboutUs: {
    fontWeight: theme.FONT_WEIGHT_BOLD
  }
});
