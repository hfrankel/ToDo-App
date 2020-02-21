import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DoneButton from './DoneButton';
import DeleteButton from './DeleteButton';

const ListItem = ({
  item,
  deleteItem,
  completeItem,
  untickItem,
  navigation
}) => {
  const pressHandler = () => {
    navigation.push('Edit', { item });
  };

  if (item.complete === true) {
    return (
      <TouchableOpacity style={styles.listItem} onPress={pressHandler}>
        <View style={styles.listItemView}>
          <DoneButton
            item={item}
            completeItem={completeItem}
            untickItem={untickItem}
          />
          <Text style={styles.listItemComplete}>{item.text}</Text>
          <DeleteButton item={item} deleteItem={deleteItem} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.listItem} onPress={pressHandler}>
      <View style={styles.listItemView}>
        <DoneButton item={item} completeItem={completeItem} />
        <Text style={styles.listItemText}>{item.text}</Text>
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
  listItemComplete: {
    textDecorationLine: 'line-through',
    color: '#a6a6a6',
    fontSize: 18,
    flexGrow: 2
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
