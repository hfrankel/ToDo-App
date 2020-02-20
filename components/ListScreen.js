import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const ListScreen = ({
  items,
  deleteItem,
  completeItem,
  untickItem,
  navigation
}) => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={items}
      renderItem={({ item }) => {
        return (
          <ListItem
            item={item}
            deleteItem={deleteItem}
            completeItem={completeItem}
            untickItem={untickItem}
            navigation={navigation}
          />
        );
      }}
    />
  );
};

export default ListScreen;
