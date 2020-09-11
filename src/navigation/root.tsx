import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { TabNavigator } from '../navigation/tabs/Tab.navigator'
import { Film } from '../screens/Film/Film'

const Stack = createStackNavigator()

export const RootStackScreen = () => 
    <NavigationContainer>
        <Stack.Navigator headerMode='none'>
            <Stack.Screen
                name="Main"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Film"
                component={Film}
            />
        </Stack.Navigator>
    </NavigationContainer>
    
