import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TodoModal from './components/TodoModal.js';
import TodoList from './components/TodoList.js';

export default function App() {

  const [todoList, setTodoList] = useState([]);
  const [todoModalVisible, setTodoModalVisible] = useState(false);

  const addTodo = (data) => {
    setTodoList(pre=>[...pre, {...data, key: todoList.length ? todoList.slice(-1)[0].key+1 : 1}]);
    setTodoModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <TodoList todoList={todoList}/>
      <View style={styles.todoAddContainer}>
        <Button title='+' onPress={() => setTodoModalVisible(true)}/>
      </View>
      <TodoModal visibility={todoModalVisible} visibilityHandler={setTodoModalVisible} addTodo={addTodo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  todoAddContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 40,
    elevation:2
  }

});
