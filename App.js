import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoInput from './components/TodoInput';
import Header from './components/Header';
import ListScreen from './components/ListScreen';
import { uuid } from 'uuidv4';

export default function App() {
  const [items, setItems] = useState([{ id: uuid(), text: 'To do #1' }]);

  const addItem = text => {
    setItems(prevItems => {
      return [{ id: uuid(), text }, ...prevItems];
    });
  };

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <TodoInput addItem={addItem} />
      <ListScreen items={items} deleteItem={deleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
