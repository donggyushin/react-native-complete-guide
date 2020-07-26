import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import InputComponent from './components/InputComponent';

export default function App() {


  const [enteredGoal, setEnteredGoal] = useState({
    key: '',
    text: ''
  })
  const [goalList, setGoalList] = useState([])

  const updateEnteredGoal = (enteredText) => {
    setEnteredGoal({
      key: goalList.length.toString(),
      text: enteredText
    })
  }

  const addGoalListElement = () => {
    if (enteredGoal.text) {
      setGoalList(currentGoalListElements => [...currentGoalListElements, enteredGoal])
      setEnteredGoal({
        key: '',
        text: ''
      })
    }
  }

  return (
    <View style={styles.container}>
      <InputComponent
        updateEnteredGoal={updateEnteredGoal}
        enteredGoal={enteredGoal}
        addGoalListElement={addGoalListElement}
      />
      <FlatList data={goalList} renderItem={data => <GoalItem text={data.item.text} />} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },



});
