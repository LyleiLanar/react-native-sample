import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native"

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Type your goal...'
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#aaaaaa',
        width: '70%',
        marginRight: 10,
        backgroundColor: '#FFE6E6',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },

});
