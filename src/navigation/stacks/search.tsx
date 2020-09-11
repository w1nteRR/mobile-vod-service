import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Search } from '../../screens/Search'
import { SearchModal } from '../../components/Search/modal/Search.modal'

const SearchStack = createStackNavigator<SearchStackParams>()

type SearchStackParams = {
    Search: undefined
    SearchModal: undefined
}

export const SearchStackScreen = () => 
    <SearchStack.Navigator initialRouteName='Search' headerMode='none' mode='modal'>
        <SearchStack.Screen name="Search" component={Search}  />
        <SearchStack.Screen 
            name="SearchModal" 
            component={SearchModal} 
            options={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}  
        />
    </SearchStack.Navigator>