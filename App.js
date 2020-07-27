import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import InputComponent from './components/InputComponent';
import { guidGenerator } from './utils/utils';

export default function App() {


  const [enteredGoal, setEnteredGoal] = useState({
    key: '',
    text: ''
  })
  const [goalList, setGoalList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const updateEnteredGoal = (enteredText) => {
    setEnteredGoal({
      key: goalList.length.toString(),
      text: enteredText
    })
  }

  const addGoalListElement = async () => {
    if (enteredGoal.text) {

      const key = guidGenerator()

      setGoalList(currentGoalListElements => [...currentGoalListElements, {
        key,
        text: enteredGoal.text
      }])
      setEnteredGoal({
        key: '',
        text: ''
      })


    }
  }

  const onDelete = (goalId) => {

    setGoalList(currentGoalList => {
      return currentGoalList.filter(goal => {
        return goal.key !== goalId
      })
    })
  }

  const makeModalVisible = () => {
    setModalVisible(true)
  }

  const makeModalInvisible = () => {
    setModalVisible(false)
  }



  return (
    <View style={styles.container}>
      <Button onPress={makeModalVisible} title={"Add new goal"} />
      <InputComponent
        updateEnteredGoal={updateEnteredGoal}
        enteredGoal={enteredGoal}
        addGoalListElement={addGoalListElement}
        modalVisible={modalVisible}
        makeModalInvisible={makeModalInvisible}
      />
      <FlatList data={goalList} renderItem={data => <GoalItem onDelete={onDelete.bind(this, data.item.key)} text={data.item.text} />} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },



});
