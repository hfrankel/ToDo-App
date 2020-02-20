import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const EditTaskScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [editedtext, setEditedText] = useState(`${item.text}`);

  // Find a way to pass params through header button then update state for item.text
  // on homescreen

  return (
    <TextInput
      style={styles.listItemText}
      onChangeText={text => setEditedText(text)}
      value={editedtext}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  listItemText: {
    fontSize: 18,
    marginTop: 6,
    marginLeft: 6
  }
});

export default EditTaskScreen;
