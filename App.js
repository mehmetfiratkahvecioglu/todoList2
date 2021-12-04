import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
//comps
import Todos from './components/todolist';
import Header from './components/header';
import Form from './components/form';

const App = () => {
  const [todo, setTodo] = useState([
    {text: 'Çöp Atmak', key: '1'},
    {text: 'Kod Yazmak', key: '2'},
    {text: 'Kitap Okumak', key: '3'},
    {text: 'Spor Yapmak', key: '4'},
    {text: 'Bulaşıkları Yıkamak', key: '5'},
  ]);
  const addHandler = newTodo => {
    if (newTodo.length > 3) {
      setTodo(prevList => [
        {text: newTodo, key: Math.random().toString()},
        ...prevList,
      ]);
    } else {
      Alert.alert('HATA', 'Lütfen 3 karekterden fazla giriniz');
    }
  };

  const deleteHandler = keyy => {
    setTodo(prevList => prevList.filter(item => item.key != keyy));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <View style={styles.innerContainer}>
          <Form addHandler={addHandler} />
          <View style={styles.listContainer}>
            <FlatList
              data={todo}
              renderItem={({item}) => (
                <Todos item={item} deleteHandler={deleteHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  innerContainer: {margin: 10, flex: 1},
  listContainer: {margin: 20, flex: 1},
});

export default App;
