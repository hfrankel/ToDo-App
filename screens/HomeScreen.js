import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import TodoInput from '../components/TodoInput';
import ListScreen from '../components/ListScreen';
import ItemsContext from './../contexts/ItemsContext';

const HomeScreen = ({ navigation }) => {
  const values = useContext(ItemsContext);

  return (
    <View style={styles.container}>
      <TodoInput addItem={values.addItem} />
      <ListScreen
        items={values.items}
        deleteItem={values.deleteItem}
        completeItem={values.completeItem}
        untickItem={values.untickItem}
        navigation={navigation}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
