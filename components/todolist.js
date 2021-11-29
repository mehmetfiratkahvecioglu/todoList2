import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Todos = ({item, deleteHandler}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => deleteHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {fontSize: 20, fontWeight: 'bold'},
});

export default Todos;
