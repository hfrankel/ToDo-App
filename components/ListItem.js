import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DoneButton from './DoneButton';
import DeleteButton from './DeleteButton';

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <DoneButton />
        <DeleteButton item={item} deleteItem={deleteItem} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eeeeee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 18,
    flexGrow: 2
  }
});

export default ListItem;
