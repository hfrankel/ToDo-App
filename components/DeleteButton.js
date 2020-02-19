import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DeleteButton = () => {
  return (
    <FontAwesome.Button
      onPress={() => alert('Deleted')}
      name="close"
      size={20}
      color="firebrick"
      style={styles.deleteButton}
    ></FontAwesome.Button>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: '#f8f8f8'
  }
});

export default DeleteButton;
