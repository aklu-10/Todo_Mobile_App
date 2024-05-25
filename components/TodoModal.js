import { useState } from "react";
import { StyleSheet, Modal, View, Text, TextInput, Button } from "react-native";

const TodoModal = ({visibility, visibilityHandler, addTodo}) => {

    const [todoValues, setTodoValues] = useState({title:'', desc:''})

    return (
        <Modal visible={visibility} animationType="slide">
            <View style={styles.todoModalContainer}>
                <TextInput style={styles.todoItem} placeholder="Enter Todo" onChangeText={(val)=>setTodoValues({...todoValues, title: val})}/>
                <TextInput multiline style={styles.todoDescription} placeholder="Description" onChangeText={(val)=>setTodoValues({...todoValues, desc: val})}/>
                <View style={styles.buttonContainer}>
                    <Button title='Save' onPress={()=>{
                        addTodo(todoValues);
                        setTodoValues({title:'', desc:''});
                    }}/>
                    <Button title='Cancel' color='red' onPress={()=>visibilityHandler(false)}/>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    todoModalContainer: {
        flex: 1,
        padding: 10,
        gap: 10

    },
    todoItem: {
        height: '10%',
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 6,
        elevation: 1,
    },
    todoDescription: {
        height: '60%',
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 6,
        elevation: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})

export default TodoModal;