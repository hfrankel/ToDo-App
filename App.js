import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoInput from './components/TodoInput';
import Header from './components/Header';
import ListScreen from './components/ListScreen';
import { uuid } from 'uuidv4';

export default function App() {
  const [items, setItems] = useState([
    { id: uuid(), text: 'To do #1', complete: false }
  ]);

  const addItem = text => {
    setItems(prevItems => {
      return [{ id: uuid(), text, complete: false }, ...prevItems];
    });
  };

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const completeItem = id => {
    setItems(prevItems => {
      return prevItems.map(item =>
        item.id === id ? { ...item, complete: true } : item
      );
    });
  };

  const untickItem = id => {
    setItems(prevItems => {
      return prevItems.map(item =>
        item.id === id ? { ...item, complete: false } : item
      );
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <TodoInput addItem={addItem} />
      <ListScreen
        items={items}
        deleteItem={deleteItem}
        completeItem={completeItem}
        untickItem={untickItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
