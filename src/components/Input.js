import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/colors'

const Input = ({ label, placeholder, isPassword }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />
                {isPassword
                    ? (<Pressable onPress={onEyePress}>
                        <Image style={styles.eye} source={isPasswordVisible ? require('../assets/eye.png') : require('../assets/eye_closed.png')} />
                    </Pressable>)
                    : null}

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        marginBottom: 8,
        marginTop: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 30,

    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,

    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
    }

})

export default Input