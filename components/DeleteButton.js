import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DeleteButton = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity>
      <FontAwesome
        onPress={() => deleteItem(item.id)}
        name="close"
        size={25}
        color="firebrick"
      ></FontAwesome>
    </TouchableOpacity>
  );
};

export default DeleteButton;
