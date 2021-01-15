import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Library } from '../../screens/library/Library'

type LibraryStackParams = {
    Library: {}
}

const LibraryStack = createStackNavigator<LibraryStackParams>()

export const LibraryStackScreen = () => 
    <LibraryStack.Navigator initialRouteName='Library' headerMode='none'>
        <LibraryStack.Screen name="Library" component={Library} />
    </LibraryStack.Navigator>
