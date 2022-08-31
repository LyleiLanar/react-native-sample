import { StyleSheet, View, Text, Image, Pressable } from 'react-native';

function GoalItem(props) {

    return (
        <View style={styles.item}>
            <View style={styles.label}>
                <Pressable android_ripple={{ color: '#ffcccc' }}>
                    <Text style={styles.text}>{props.text}</Text>
                </Pressable>
            </View>

            <View style={styles.button}>
                <Pressable android_ripple={{ color: '#ffcccc' }} onPress={props.onDeleteItem.bind(this, props.id)} >
                    <View style={styles.checkButton}>
                        <Image
                            style={styles.checkImage}
                            source={require('../assets/check.png')}
                        />
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,

    },

    label: {
        backgroundColor: '#1f7a7a',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#051414',
        width: '85%',
        // justifyContent: 'center',
    },

    text: {
        paddingLeft: 10,
        paddingTop: 9,
        paddingBottom: 12,
    },

    button: {
        backgroundColor: 'green',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#051414',
        padding: 4,
    },

    checkImage: {
        aspectRatio: 1 / 1,
        height: 32,
        // margin: 3,
    }
});