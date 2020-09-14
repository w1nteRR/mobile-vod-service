import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Library } from '../../screens/library/Library'
import { WatchLater } from '../../screens/library/WatchLater'

type LibraryStackParams = {
    Library: undefined
    WatchLater: undefined
}

const LibraryStack = createStackNavigator<LibraryStackParams>()

export const LibraryStackScreen = () => 
    <LibraryStack.Navigator initialRouteName='Library' headerMode='none'>
        <LibraryStack.Screen name="Library" component={Library} />
        <LibraryStack.Screen 
            name="WatchLater" 
            component={WatchLater}  
        />
    </LibraryStack.Navigator>
