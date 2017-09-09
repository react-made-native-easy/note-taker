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
    ...headingText
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
  }
});
