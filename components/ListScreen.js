import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const ListScreen = () => {
  const items = [
    { title: 'To do item #1' },
    { title: 'To do item #2' },
    { title: 'To do item #3' },
    { title: 'To do item #4' },
    { title: 'To do item #5' },
    { title: 'To do item #6' },
    { title: 'To do item #7' },
    { title: 'To do item #8' },
    { title: 'To do item #9' }
  ];

  return (
    <FlatList
      keyExtractor={item => item.title}
      data={items}
      renderItem={({ item }) => {
        return <ListItem item={item} />;
      }}
    />
  );
};

export default ListScreen;
