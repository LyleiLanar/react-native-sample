import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Text } from "react-native"

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    function closeModalHandler() {
        props.onCloseModal();
    }

    return (
        <Modal visible={props.visible} animationType='slide'>


            <View style={styles.inputContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleContainerText}>
                        Adding new Goal
                    </Text>
                </View>

                <TextInput
                    placeholder='Type your goal...'
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.myButton}>
                        <Button title='Cancel' color='red' onPress={closeModalHandler} />
                    </View>
                    <View style={styles.myButton}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='green' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: '#aaaaaa',
        padding: 16,
        backgroundColor: '#0a2929',
    },

    
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },

    titleContainerText: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#99e6e6',
    },

    textInput: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#aaaaaa',
        width: '100%',
        color: '#051414',
        backgroundColor: '#99e6e6',
        paddingHorizontal: 8,
        paddingVertical: 4,
        margin: 8,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        // borderWidth: 1,
        width: '100%',
        marginTop: 8,
    },

    myButton: {
        width: '40%',
        // paddingHorizontal: 8,
    },


});
