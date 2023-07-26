/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Splash from './src/screens/auth/Splash/index.js'
import SignUp from './src/screens/auth/SignUp.js'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import SignIn from './src/screens/auth/SignIn.js';

const GOOGLE_WEB_CLIENT_ID = "21582039913-go4jlsnn0nua9l1s7fpgvekmv92nap9u.apps.googleusercontent.com"
const GOOGLE_IOS_CLIENT_ID = "21582039913-rvihhd9e1kfr5sr91k4vdf474egug70j.apps.googleusercontent.com"


const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])
  return (
    <SafeAreaView>
      {/* <Splash /> */}
      {/* <SignUp /> */}
      <SignIn />
    </SafeAreaView>
  )

}


export default App;
