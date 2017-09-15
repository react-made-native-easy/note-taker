import PropTypes from 'prop-types';
import React, {Component} from 'react';
import result from 'lodash/result';
import styles from './List.styles.js';
import {FlatList, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';

class List extends Component {

  _listItem = ({item, index}) => { // index, separators are also passed
    const {onPress, headingKey, subHeadingKey} = this.props;
    const wrapperStyle = index % 2 === 0 ? [styles.listItemWrapper, styles.darkBackground] : // index % 2 is for alternating colors in the list
      [styles.listItemWrapper, styles.lightBackground];
    const heading = result(item, headingKey);
    const subHeading = result(item, subHeadingKey);
    return (
      <TouchableOpacity id={index} onPress={onPress(item)}>
        <View key={index} style={wrapperStyle} animation='fadeIn' duration={500}>
          <View>
            {heading ? <Text numberOfLines={2} ellipsizeMode='tail' style={styles.heading} >{heading}</Text> : null}
            {subHeading ? <Text numberOfLines={3} ellipsizeMode='tail' style={styles.subHeading}>{subHeading}</Text> : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  _keyExtractor = (item, index) => index

  render () {
    const {data} = this.props;
    return (
      <FlatList data={data} renderItem={this._listItem} keyExtractor={this._keyExtractor}/>
    );
  }
}
List.defaultProps = {
  data: [],
  headingKey: 'heading',
  subHeadingKey: 'subHeading'
};
List.propTypes = {
  onPress: PropTypes.func,
  data: PropTypes.array,
  headingKey: PropTypes.string,
  subHeadingKey: PropTypes.string
};
export default List;
