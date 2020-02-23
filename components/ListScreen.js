import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';
import ItemsContext from './../contexts/ItemsContext';

const ListScreen = ({ navigation }) => {
  const { items } = useContext(ItemsContext);
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={items}
      renderItem={({ item }) => {
        return <ListItem item={item} navigation={navigation} />;
      }}
    />
  );
};

export default ListScreen;
