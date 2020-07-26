import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'


const InputComponent = ({
    updateEnteredGoal,
    enteredGoal,
    addGoalListElement
}) => {
    return <View style={styles.inputContainer}>
        <TextInput placeholderTextColor="white" onChangeText={updateEnteredGoal} value={enteredGoal.text} style={styles.textInput} placeholder={"Course goal"} />
        <Button onPress={addGoalListElement} title="ADD" />
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    }, textInput: {
        borderRadius: 7,
        paddingLeft: 7,
        width: '80%',
        backgroundColor: '#4267B2',
        color: 'white'
    },
})

export default InputComponent