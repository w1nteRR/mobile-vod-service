import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../../screens/Home'

type HomeStackParams = {
    Home: undefined
}

const HomeStack = createStackNavigator<HomeStackParams>()

export const HomeStackScreen = () => 
    <HomeStack.Navigator initialRouteName='Home'>
        <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
