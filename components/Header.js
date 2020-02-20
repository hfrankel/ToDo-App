import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>To Do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 75,
    padding: 25,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: '#ffffff',
    fontSize: 23,
    textAlign: 'center'
  }
});
