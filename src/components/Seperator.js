import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
const Seperator = ({ text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginVertical: 20
    },
    line: {
        height: 1,
        backgroundColor: colors.lightGrey,
        flex: 1,
    },
    text: {
        color: colors.blue,
        fontWeight: '500',
        marginHorizontal: 8,
    }
})

export default Seperator