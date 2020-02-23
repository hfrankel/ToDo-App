import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ItemsContext from './../contexts/ItemsContext';

const DoneButton = ({ item }) => {
  const { completeItem, untickItem } = useContext(ItemsContext);

  // Task has been completed
  if (item.complete === true) {
    return (
      <TouchableOpacity style={{ marginRight: 25 }}>
        <FontAwesome
          onPress={() => untickItem(item.id)}
          name="check-circle-o"
          size={25}
          color="green"
        ></FontAwesome>
      </TouchableOpacity>
    );
  }

  // Uncompleted task
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
