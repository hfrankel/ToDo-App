import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { uuid } from 'uuidv4';
import TodoInput from '../components/TodoInput';
import ListScreen from '../components/ListScreen';

export default function HomeScreen({ navigation, route }) {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Add tasks', complete: false }
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

  const updateItem = (id, editedtext) => {
    setItems(prevItems => {
      return prevItems.map(item =>
        item.id === id ? { ...item, text: editedtext } : item
      );
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

  console.log(route);
  return (
    <View style={styles.container}>
      <TodoInput addItem={addItem} />
      <ListScreen
        items={items}
        deleteItem={deleteItem}
        completeItem={completeItem}
        untickItem={untickItem}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
