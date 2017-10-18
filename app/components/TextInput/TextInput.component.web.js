import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {

  inputRef = (input) => {
    this.input = input;
  }
  onKeyPress = (e)  => {
    this.props.onChangeText((this.input || e.target).value);
  }
  render () {
    const {style, value, multiline = false} = this.props;

    return (
      multiline ?
        <textarea ref={this.inputRef} onKeyPress={this.onKeyPress} style={style} defaultValue={value} />
        :
        <input type='text' onKeyPress={this.onKeyPress} style={style} defaultValue={value} />
    );
  }

}

TextInput.propTypes = {
  onChangeText: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string,
  multiline: PropTypes.bool
};

export default TextInput;
