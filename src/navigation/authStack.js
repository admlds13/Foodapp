import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen'
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
// import RestaurantMapScreen from '../screens/RestaurantsMapScreen';
// import DrawerNavigator from './DrawerNavigator';
// import SignUpScreen from '../screens/authScreens/SignUpScreen';

const Auth = createStackNavigator();

export function AuthStack() {
    return (
        <Auth.Navigator>
            <Auth.Screen
                name="SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Auth.Navigator>
    )
}
