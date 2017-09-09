import React, {Component} from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './TextArea.component.style';

class TextArea extends Component {
  static propTypes = {
    text: PropTypes.string,
    onTextChange: PropTypes.func
  }
  render () {
    const {text, onTextChange, ...extraProps} = this.props;
    return (
      <TextInput
        {...extraProps}
        style={[styles.textArea, extraProps.style]}
        multiline = {true}
        onChangeText={onTextChange}
        value={text}
      />
    );
  }
}
export default TextArea;
