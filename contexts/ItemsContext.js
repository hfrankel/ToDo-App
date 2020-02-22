import React, { useState, createContext } from 'react';
import { uuid } from 'uuidv4';

const Context = React.createContext();

export const ItemsStore = props => {
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
  return (
    <Context.Provider
      value={{
        items,
        addItem,
        deleteItem,
        updateItem,
        completeItem,
        untickItem
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
