import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {headingText, textInput} from '../../styles/common.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.CONTAINER_PADDING,
    alignItems: 'center'
  },
  titleHeading: {
    ...headingText
  },
  aboutUs: {
    marginTop: theme.CONTAINER_PADDING
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
  }
});
