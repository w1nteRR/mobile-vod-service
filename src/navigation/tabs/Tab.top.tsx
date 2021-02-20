import React, { FC } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { Explore } from '../../screens/explore/Explore'
import { Charts } from '../../screens/explore/Charts'
import { Genres } from '../../screens/explore/Genres'
import { Studios } from '../../screens/explore/Studios'

const Tab = createMaterialTopTabNavigator()

export const BrowseNavStack: FC = () =>
  <Tab.Navigator 
    initialRouteName='Explore' 
    swipeEnabled={false} 
    tabBarOptions={{
      style: {
        backgroundColor: 'black'
      },
      indicatorStyle: {
        width: 0
      },
      tabStyle: {
        width: 100
      },
      scrollEnabled: true,
      labelStyle: {
        textTransform: 'none',
        fontWeight: 'bold'
      }
    }}
  >
    <Tab.Screen name='Explore' component={Explore} />
    <Tab.Screen name='Сharts' component={Charts} />
    <Tab.Screen name='Genres' component={Genres} />
    <Tab.Screen name='Studios' component={Studios} />
  </Tab.Navigator>