import { Pressable, StyleSheet, Text, View } from "react-native";

const TodoItem = ({item}) => {
    return (
        <View style={styles.todoItem}>
            <Pressable android_ripple={{color: 'blue'}}>
                <Text style={{color: 'white', padding: 10}}>{item.title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    todoItem: {
        // padding: 10,
        backgroundColor: 'darkblue',
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5
    }

});

export default TodoItem;