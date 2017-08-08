import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.CONTAINER_PADDING,
    alignItems: 'center'
  },
  titleHeading: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    alignSelf: 'flex-start',
    padding: 10,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  titleTextInput: {
    padding: theme.TEXT_INPUT_PADDING,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    alignSelf: 'stretch'
  },
  textAreaTitle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    alignSelf: 'flex-start',
    padding: 10,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    fontStyle: 'italic'
  },
  textArea: {
    padding: theme.TEXT_INPUT_PADDING,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    alignSelf: 'stretch',
    flex: 1
  }
});
