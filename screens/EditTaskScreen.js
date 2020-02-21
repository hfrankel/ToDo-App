import React, { useState } from 'react';
import { TextInput, StyleSheet, Button } from 'react-native';

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
      style={styles.listItemText}
      onChangeText={text => setEditedText(text)}
      value={editedtext}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  listItemText: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10
  }
});

export default EditTaskScreen;
