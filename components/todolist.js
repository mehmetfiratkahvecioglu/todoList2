import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Todos = ({item, deleteHandler}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => deleteHandler(item.key)}>
      <Icon name="delete" size={30} />
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
    flexDirection: 'row',
  },
  item: {fontSize: 20, fontWeight: 'bold', marginLeft: 10},
});

export default Todos;
