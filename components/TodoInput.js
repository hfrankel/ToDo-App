import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TodoInput = () => {
  const [todoValue, onChangeText] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={'Add to do item'}
        onChangeText={text => onChangeText(text)}
        value={todoValue}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity>
        <FontAwesome
          onPress={() => alert('Added')}
          style={styles.icon}
          size={35}
          name="plus-circle"
        ></FontAwesome>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'darkslateblue',
    borderWidth: 1,
    flexGrow: 2
  },
  icon: {
    marginRight: 15,
    color: 'darkslateblue'
  }
});

export default TodoInput;
