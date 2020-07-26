import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const GoalItem = (props) => {
    return <View style={styles.goalItem}><Text>{props.text}</Text></View>
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