import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

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
      <View style={styles.inputContainer}>
        <TextInput placeholderTextColor="white" onChangeText={updateEnteredGoal} value={enteredGoal.text} style={styles.textInput} placeholder={"Course goal"} />
        <Button onPress={addGoalListElement} title="ADD" />
      </View>
      <FlatList data={goalList} renderItem={data => <GoalItem text={data.item.text} />} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  textInput: {
    borderRadius: 7,
    paddingLeft: 7,
    width: '80%',
    backgroundColor: '#4267B2',
    color: 'white'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },

});
