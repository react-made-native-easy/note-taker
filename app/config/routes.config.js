import theme from '../styles/theme.style.js';

export const aboutRoutesConfig = {
  tabBarOptions: {
    upperCaseLabel: false,
    showIcon: false,
    style: {
      backgroundColor: 'white'
    },
    activeTintColor: theme.ACTIVE_TAB_COLOR,
    inactiveTintColor: theme.INACTIVE_TAB_COLOR,
    labelStyle: {
      fontSize: 14
    }
  },
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom'
};
