import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoItem from "./TodoItem.js";

const TodoList = ({todoList}) => {
    return  (
        <View style={styles.listContainer}>
            <FlatList data={todoList} renderItem={(itemData)=>(
                // <View style={styles.listContainer}>
                    <TodoItem item={itemData.item}/>
                // </View>
            )}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex:1,
        padding: 10,
        marginTop: 50,
        gap: 10
    }
})

export default TodoList;