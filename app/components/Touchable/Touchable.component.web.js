import React from 'react';
import PropTypes from 'prop-types';

const Touchable = ({onPress, style, children}) => (<span onClick={onPress} style={style}>{children}</span>);

Touchable.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.object
};
export default Touchable;
