import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoInput from './components/TodoInput';
import Header from './components/Header';
import ListScreen from './components/ListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  }
});
