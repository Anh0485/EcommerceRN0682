import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
const CheckBox = ({ checked, onCheck }) => {
    console.log('inside checkbox')
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!checked)} style={styles.container}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require('../assets/checkBox.png')} />
                </View>
            ) : null}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 4,
        width: 22,
        height: 22,
        marginLeft: 35
    },
    innerContainer: {
        backgroundColor: colors.grey,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        width: 12,
        height: 9,
    }
})
export default React.memo(CheckBox) 