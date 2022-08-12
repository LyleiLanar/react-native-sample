import { StyleSheet, View, Text, Button } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.button}>
                <Button title='✔️' />
            </View>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },

    text: {
        backgroundColor: '#FFE6E6',

        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#aaaaaa',

        flexDirection: 'column',
        justifyContent: 'center',

        width: '83%',
        paddingVertical: 8,
        paddingLeft: 8,
        marginVertical: 4,
    },

    button: {
        paddingRight: 8
    },
});