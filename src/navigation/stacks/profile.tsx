import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Profile } from '../../screens/profile/Profile'

type ProfileStackParams = {
    Profile: undefined
}

const ProfileStack = createStackNavigator<ProfileStackParams>()

export const ProfileStackScreen = () => 
    <ProfileStack.Navigator initialRouteName='Profile' headerMode='none'>
        <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
