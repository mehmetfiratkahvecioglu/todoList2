import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar Listesi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  title: {fontWeight: 'bold', fontSize: 30, color: 'white'},
});

export default Header;
