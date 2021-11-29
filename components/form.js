import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const Form = ({addHandler}) => {
  const [addtodo, setAddtodo] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput placeholder="Buraya Yazınız" onChangeText={setAddtodo} />
      </View>
      <Button
        title="Yeni yapılacak iş ekle"
        color="plum"
        onPress={() => {
          addHandler(addtodo);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 5, justifyContent: 'center', alignItems: 'center'},
  innerContainer: {
    borderRadius: 10,
    borderWidth: 3,
    width: '100%',
    marginBottom: 10,
  },
});
export default Form;
