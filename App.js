import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Button
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

const logo = require('./assets/goal.png')

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function turnOnModalHandler() {
    setModalIsVisible(true);
  }

  function turnOffModalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoalList(currentGoalList => [...currentGoalList, { text: enteredGoalText, id: Math.random().toString() }]);
    console.log(goalList);
    turnOffModalHandler();
  };

  function deletGoalHandler(id) {
    console.log('DELETE' + id);
    setGoalList(currentGoalList => {
      return currentGoalList.filter((goal) => goal.id !== id)
    });
  }

  return (
    <>
    <StatusBar style='light'/>
      <View style={styles.appContainer}>

        <View style={styles.titleContainer}>
          <Image
            source={logo}
            style={styles.titlePicture}
          />
          <Text style={styles.titleContainerText}>
            My App
          </Text>
        </View>
        <Button title='Add goal' color='green' onPress={turnOnModalHandler} />
        <GoalInput onAddGoal={addGoalHandler} onCloseModal={turnOffModalHandler} visible={modalIsVisible} />

        <View style={styles.goalsContainer}>
          <View>
            <Text style={styles.goalTitleText}>
            My Goals
            </Text>
          </View>

          <View style={styles.goalList}>
            <FlatList
              data={goalList}
              renderItem={itemData => {
                return <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deletGoalHandler}
                />;
              }}
              fadingEdgeLength={50} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 16,
    height: '100%',
    backgroundColor: '#0a2929',
  },

  titleContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  titleContainerText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#99e6e6',
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
    color: '#99e6e6',
  },

  goalList: {
    flex: 1
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#aaaaaa',
    width: '70%',
    marginRight: 10,
    backgroundColor: '#0a2929',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
});
