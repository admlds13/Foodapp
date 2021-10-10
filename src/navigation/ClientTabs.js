import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreeen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import { ClientStack } from './clientStack';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator    
        navigationOptions={
            tabBarVisible= false
        }    
        screenOptions = {{            
            activeTintColor :colors.buttons
        }}
        >
            <ClientTabs.Screen
            name ="HomeScreen"            
            component ={HomeScreen}
            
            
            options ={
                {                    
                    tabBarLabel : "Home",                    
                    tabBarIcon: ({color,size})=>(
                        <Icon 
                            name ='home'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    )
                }
            }
            
            />


        </ClientTabs.Navigator>
    )}