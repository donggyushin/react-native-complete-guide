import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const GoalItem = (props) => {
    return <TouchableOpacity onPress={props.onDelete}><View style={styles.goalItem}><Text>{props.text}</Text></View></TouchableOpacity>
}

const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 7,
        backgroundColor: '#ccc',
        height: 30,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10
    }
})

export default GoalItem