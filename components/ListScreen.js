import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const items = [
    { item: 'To do item #1' },
    { item: 'To do item #2' },
    { item: 'To do item #3' },
    { item: 'To do item #4' },
    { item: 'To do item #5' },
    { item: 'To do item #6' },
    { item: 'To do item #7' },
    { item: 'To do item #8' },
    { item: 'To do item #9' }
  ];

  return (
    <FlatList
      keyExtractor={item => item.item}
      data={items}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.item}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30
  }
});

export default ListScreen;
