/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import {

  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import Splash from './src/screens/auth/Splash/index.js'
import SignUp from './src/screens/auth/SignUp.js'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import SignIn from './src/screens/auth/SignIn.js';
import Home from './src/screens/app/Home.js'
import Favorites from './src/screens/app/Favorites.js'
import Profile from './src/screens/app/Profile.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './src/utils/colors.js';

const GOOGLE_WEB_CLIENT_ID = "21582039913-go4jlsnn0nua9l1s7fpgvekmv92nap9u.apps.googleusercontent.com"
const GOOGLE_IOS_CLIENT_ID = "21582039913-rvihhd9e1kfr5sr91k4vdf474egug70j.apps.googleusercontent.com"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/tabs/home_active.png')
            : require('./src/assets/tabs/home.png');
        } else if (route.name === 'Profile') {
          icon = focused
            ? require('./src/assets/tabs/profile_active.png')
            : require('./src/assets/tabs/profile.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/tabs/bookmark_active.png')
            : require('./src/assets/tabs/bookmark.png');
        }

        // You can return any component that you like here!
        return <Image style={{ width: 24, height: 24 }} source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightGrey }
    })}

  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
)


const App = () => {

  const isSignedIn = true

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])

  const theme = {
    colors: {
      background: colors.white,
    }
  }

  return (
    // <SafeAreaView>
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn
            ? (
              <><Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} /></>
            )
            : (
              <>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Signin" component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
              </>
            )}


        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>


    // </SafeAreaView>
  )

}


export default App;
