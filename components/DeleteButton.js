import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ItemsContext from './../contexts/ItemsContext';

const DeleteButton = ({ item }) => {
  const { deleteItem } = useContext(ItemsContext);
  return (
    <TouchableOpacity>
      <FontAwesome
        onPress={() => deleteItem(item.id)}
        name="trash-o"
        size={25}
        color="firebrick"
      ></FontAwesome>
    </TouchableOpacity>
  );
};

export default DeleteButton;
