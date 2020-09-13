import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../../screens/auth/SignIn'
import { SignUp } from '../../screens/auth/SignUp'


const AuthStack = createStackNavigator<AuthStackParams>()

type AuthStackParams = {
    SignIn: undefined
    SignUp: undefined
}

export const AuthStackScreen = () => 
    <AuthStack.Navigator initialRouteName='SignIn' headerMode='none'>
        <AuthStack.Screen name="SignIn" component={SignIn}  />
        <AuthStack.Screen name="SignUp" component={SignUp}  />
    </AuthStack.Navigator>