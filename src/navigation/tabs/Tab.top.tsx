import React, { FC } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { MAIN } from '../../components/common/utils/colors'

import { Browse } from '../../screens/Browse'

const Tab = createMaterialTopTabNavigator()

export const BrowseNavStack: FC = () => 

    <Tab.Navigator initialRouteName='Browse' swipeEnabled={false} tabBarOptions={{
        style: {
            backgroundColor: '#090909',
        },
        tabStyle: {
            backgroundColor: MAIN,
            margin: 20,
            borderRadius: 10,
        },
        indicatorStyle: {
            width: 0,
        },
        scrollEnabled: true

    }}>
        <Tab.Screen name="Browse" component={Browse}  />
    </Tab.Navigator>