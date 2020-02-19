import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DoneButton = () => {
  return (
    <TouchableOpacity style={{ marginRight: 10 }}>
      <FontAwesome
        onPress={() => alert('Completed')}
        name="check"
        size={25}
        color="green"
      ></FontAwesome>
    </TouchableOpacity>
  );
};

export default DoneButton;
