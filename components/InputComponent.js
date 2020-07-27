import React from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'


const InputComponent = ({
    updateEnteredGoal,
    enteredGoal,
    addGoalListElement,
    modalVisible,
    makeModalInvisible
}) => {
    return <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.inputContainer}>
            <TextInput placeholderTextColor="white" onChangeText={updateEnteredGoal} value={enteredGoal.text} style={styles.textInput} placeholder={"Course goal"} />
            <Button onPress={addGoalListElement} title="ADD" />
            <View>
                <Button onPress={makeModalInvisible} title="CLOSE" color="red" />
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        flex: 1

    }, textInput: {
        borderRadius: 7,
        paddingLeft: 7,
        width: '80%',
        backgroundColor: '#4267B2',
        color: 'white',
        height: 50
    }, closeButton: {
        position: 'absolute',
        top: 60
    }
})

export default InputComponent