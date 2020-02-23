import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoInput from '../components/TodoInput';
import ListScreen from '../components/ListScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TodoInput />
      <ListScreen navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
