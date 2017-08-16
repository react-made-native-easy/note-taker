import React, {Component} from 'react';
import {TextInput} from 'react-native';
import styles from './TextArea.component.style';

class TextArea extends Component {
  state = {
    text: ''
  }
  setText = (text) => this.setState({text})
  render () {
    const {...extraProps} = this.props;
    const alignTextTop = {textAlignVertical: 'top'};
    return (
      <TextInput
        {...extraProps}
        style={[styles.textArea, alignTextTop, extraProps.style]}
        multiline = {true}
        onChangeText={this.setText}
        value={this.state.text}
        underlineColorAndroid={'transparent'}
      />
    );
  }
}

export default TextArea;
