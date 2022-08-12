import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goalList, setGoalList] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setGoalList(currentGoalList => [...currentGoalList, { text: enteredGoalText, key: Math.random().toString() }]);
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
          <FlatList
            data={goalList}
            renderItem={itemData => {
              return <GoalItem text={itemData.item.text} />;
            }}
            fadingEdgeLength={50} />

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 16,
    height: '100%',
    backgroundColor: '#F2D1D1',
  },

  titleContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainerText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  titlePicture: {
    width: 50,
    height: 50,
  },

  inputContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa',
  },

  goalsContainer: {
    flex: 1
  },

  goalTitleText: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 4,
  },

  goalList: {
    flex: 1
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
