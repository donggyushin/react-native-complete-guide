import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.textInput} placeholder={"Course goal"} />
        <Button title="ADD" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
