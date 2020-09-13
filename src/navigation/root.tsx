import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { TabNavigator } from '../navigation/tabs/Tab.navigator'
import { Film } from '../screens/Film/Film'
import { FilmWatch } from '../screens/Film/FilmWatch'
import { FilmWatchStackScreen } from './stacks/filmWatch'

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
            <Stack.Screen
                name="FilmWatch"
                component={FilmWatchStackScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
    
