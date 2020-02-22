import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DoneButton = ({ item, completeItem, untickItem }) => {
  if (item.complete === true) {
    return (
      <TouchableOpacity style={{ marginRight: 15 }}>
        <FontAwesome
          onPress={() => untickItem(item.id)}
          name="check-circle-o"
          size={25}
          color="green"
        ></FontAwesome>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={{ marginRight: 25 }}>
      <FontAwesome
        onPress={() => completeItem(item.id)}
        name="check-circle-o"
        size={25}
        color="green"
      ></FontAwesome>
    </TouchableOpacity>
  );
};

export default DoneButton;
