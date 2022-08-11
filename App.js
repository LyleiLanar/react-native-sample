import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goalList, setGoalList] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setGoalList(currentGoalList => [...currentGoalList, enteredGoalText]);
  };



  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Image
          source={require('./assets/goal.png')}
          style={styles.titlePicture}
        />
        <Text style={styles.titleContainerText}>
          My App
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Type your goal...'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <View>
          <Text style={styles.goalTitleText}>
            ⭐ My Goals
          </Text>
        </View>
        <View style={styles.goalList}>
          {goalList.map((goal) => {
            return (
              <View key={goal} style={styles.goalElem}>
                <Text style={styles.goalElemTxt}>{goal}</Text>
                <Button title='✔️' />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    paddingTop: 30,
    paddingHorizontal: 16,
    height: '100%',
    // flex: 1,
    backgroundColor: '#F2D1D1',
    // borderWidth: 1,
  },

  titleContainer: {
    // flex: 4,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center', 
    // borderWidth: 1,
  },

  titleContainerText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    // borderWidth: 1,
  },

  titlePicture: {
    width: 50,
    height: 50,
    // borderWidth: 1,
  },

  inputContainer: {
    // flex: 2,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa',
    // borderWidth: 1,
  },

  goalsContainer: {
    // flex: 20,
    alignItems: 'flex-start',
    // borderWidth: 1,
  },

  goalTitleText: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 4,
    // borderWidth: 1,
  },

  goalList: {
    flexDirection: 'column',
    width: '100%',
    // borderWidth: 1,

  },

  goalElem: {
    marginVertical: 4,
    marginHorizontal: 0,
    flexDirection: 'row',
    alignItems: "center",
    width: '90%',
    backgroundColor: '#FFE6E6',
    borderTopStartRadius: 6,
    borderBottomStartRadius: 6,
    borderWidth: 1,
    borderColor: '#aaaaaa',
  },

  goalElemTxt: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 8,
    // borderWidth: 1,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#aaaaaa',
    width: '70%',
    marginRight: 10,
    backgroundColor: '#FFE6E6',
    paddingHorizontal: 8,
    paddingVertical: 3,
    // borderWidth: 1,
  },
});
