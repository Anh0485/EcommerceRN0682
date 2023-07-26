import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../../components/AuthHeader'
import Input from '../../components/Input'
import CheckBox from '../../components/CheckBox'
import { colors } from '../../utils/colors'
import Button from '../../components/Button'
import Seperator from '../../components/Seperator'
import GoogleLogin from '../../components/GoogleLogin'

const SignIn = () => {

    const [checked, setChecked] = useState(false);

    const onSignIn = () => {
        console.log('hiiiiiiii ')
    }

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign In" />

            <Input placeholder="example@gmail.com" label="Email" />
            <Input isPassword placeholder="******" label="Password" />



            <Button style={styles.button} title="Sign In" />
            <Seperator text="Or sign in with" />
            <GoogleLogin />

            <Text style={styles.footerText}>
                Don’t have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>
                    Sign Up
                </Text>
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        //Gia Huy
        // marginTop: 50,
        //Gia uy
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 13
    },
    agreeTextBold: {
        fontWeight: 'bold'
    },
    button: {
        marginLeft: 30,
        marginRight: 30,
        marginVertical: 20,
        width: 'auto'
    },
    footerText: {
        color: colors.blue,
        marginBottom: 56,
        textAlign: 'center'

    },
    footerLink: {
        fontWeight: 'bold',
        marginLeft: 5
    }
})

export default SignIn