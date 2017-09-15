import theme from '../../styles/theme.style';
import {headingText} from '../../styles/common.style';

export default {
  listItemWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  lightBackground: {
    backgroundColor: 'white'
  },
  darkBackground: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT
  },
  heading: {
    ...headingText,
    paddingHorizontal: 0
  },
  subHeading: {

  }
};
