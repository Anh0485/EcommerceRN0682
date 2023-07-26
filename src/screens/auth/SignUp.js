import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../../components/AuthHeader'
import Input from '../../components/Input'
import CheckBox from '../../components/CheckBox'
import { colors } from '../../utils/colors'
import Button from '../../components/Button'
import Seperator from '../../components/Seperator'
import GoogleLogin from '../../components/GoogleLogin'

const SignUp = () => {

    const [checked, setChecked] = useState(false);

    const onSignIn = () => {
        console.log('hiiiiiiii ')
    }

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign Up" />

            <Input placeholder="Van Anh" label="Name" />
            <Input placeholder="example@gmail.com" label="Email" />
            <Input isPassword placeholder="******" label="Password" />

            <View style={styles.agreeRow}>
                <CheckBox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text>  & <Text style={styles.agreeTextBold}>Privacy</Text> </Text>
            </View>

            <Button style={styles.button} title="Sign Up" />
            <Seperator text="Or sign up with" />
            <GoogleLogin />

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>
                    Sign In
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

export default SignUp