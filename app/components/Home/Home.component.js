import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component';

class Home extends Component {
  state = {
    title: '' // adding the state here temporarily for illustration purposes
  }
  setTitle = (title) => this.setState({title})
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeading}> Note Title</Text>
        <TextInput style={styles.titleTextInput}
            onChangeText={this.setTitle} value={this.state.title} />
        <Text style={styles.textAreaTitle}> Please type your note below </Text>
        <TextArea style={styles.textArea}/>
      </View>
    );
  }
}

export default Home;
