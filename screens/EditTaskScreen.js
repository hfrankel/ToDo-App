import React, { useState } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

const EditTaskScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [editedtext, setEditedText] = useState(`${item.text}`);

  const pressHandler = () => {
    navigation.goBack(editedtext);
  };

  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => pressHandler()} title="Done" color="#ffffff" />
    )
  });

  return (
    <TextInput
      style={styles.editItemText}
      onChangeText={text => setEditedText(text)}
      value={editedtext}
      multiline
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  editItemText: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    flexGrow: 1,
    alignItems: 'flex-start'
  }
});

export default EditTaskScreen;
