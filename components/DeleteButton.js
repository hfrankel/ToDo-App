import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DeleteButton = () => {
  return (
    <TouchableOpacity>
      <FontAwesome
        onPress={() => alert('Deleted')}
        name="close"
        size={25}
        color="firebrick"
      ></FontAwesome>
    </TouchableOpacity>
  );
};

export default DeleteButton;
