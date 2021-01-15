import React, { FC } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { Explore } from '../../screens/explore/Explore'
import { Charts } from '../../screens/explore/Charts'

const Tab = createMaterialTopTabNavigator()

export const BrowseNavStack: FC = () => 

    <Tab.Navigator initialRouteName='Browse' swipeEnabled={false} tabBarOptions={{
        style: {
            backgroundColor: 'black'
        },
        indicatorStyle: {
            width: 0
        },
        scrollEnabled: true,
        labelStyle: {
            textTransform: 'none',
            fontWeight: 'bold'
        }
    }}>
        <Tab.Screen name="Explore" component={Explore}  />
        <Tab.Screen name="Top charts" component={Charts}  />
        {/* <Tab.Screen name="Genres" component={Browse}  />
        <Tab.Screen name="Studios" component={Browse}  />  */}
    </Tab.Navigator>