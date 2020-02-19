import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DoneButton = () => {
  return (
    <FontAwesome.Button
      onPress={() => alert('Completed')}
      name="check"
      size={20}
      color="green"
      style={styles.doneButton}
    ></FontAwesome.Button>
  );
};

const styles = StyleSheet.create({
  doneButton: {
    backgroundColor: '#f8f8f8'
  }
});

export default DoneButton;
