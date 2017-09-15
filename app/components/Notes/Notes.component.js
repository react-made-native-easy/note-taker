/* Notes: */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './Notes.style.js';
import translate from '../../utils/language.utils';
import List from '../List/List.component';
import Modal from 'react-native-modal-overlay';


class Notes extends Component {
  state = {
    visible: false,
    selectedData: {}
  }
  hideModal = () => this.setState({visible: false})
  showModal = (selectedData) => () => this.setState({visible: true, selectedData});

  render () {
    if (this.props.data.length === 0) {
      return null;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{translate('NOTES_heading')}: </Text>
        <List onPress={this.showModal} headingKey='title' subHeadingKey='text' data={this.props.data}/>
        <Modal closeOnTouchOutside onClose={this.hideModal} visible={this.state.visible} >
          <Text style={styles.heading}>{translate('NOTES_title')}: {this.state.selectedData.title} </Text>
          <Text style={styles.heading}>{translate('NOTES_content')}: {this.state.selectedData.text}</Text>
        </Modal>
      </View>);
  }
}
Notes.defaultProps = {
  data: []
};
Notes.propTypes = {
  data: PropTypes.array
};
export default Notes;
