import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {headingText} from '../../styles/common.style';

export default StyleSheet.create({
  heading: {
    ...headingText,
    shadowColor: theme.BACKGROUND_COLOR_LIGHT,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2,
    width: '100%'
  },
  container: {
    maxHeight: '40%',
    borderTopWidth: 1,
    borderTopColor: theme.BACKGROUND_COLOR_LIGHT
  }
});
