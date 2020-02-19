import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const todoInput = () => {
  const [todoValue, onChangeText] = useState('todos');

  return (
    <TextInput
      onChangeText={text => onChangeText(text)}
      value={todoValue}
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    ></TextInput>
  );
};

export default todoInput;
