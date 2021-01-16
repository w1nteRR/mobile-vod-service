import React from 'react'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { HomeStackScreen } from '../stacks/home'
import { SearchStackScreen } from '../stacks/search'
import { ProfileStackScreen } from '../stacks/profile'

import { BrowseNavStack } from './Tab.top'

import { RootState } from '../../redux/rootReducer'
import { Library } from '../../screens/library/Library'


const Tab = createBottomTabNavigator()

export const TabNavigator = () => {

    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated)

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    switch (route.name) {
                        case 'Home':
                            return (
                                focused
                                    ? <Icon name='home' size={25} color='#fff' />
                                    : <Icon name='home' size={25} color='silver' />
                            )
                        case 'Browse':
                            return (
                                focused
                                    ? <Icon name='compass' size={25} color='#fff' />
                                    : <Icon name='compass' size={25} color='silver' />
                            )
                        case 'Library':
                            return (
                                focused
                                    ? <MaterialIcon name='video-library' size={23} color='#fff' />
                                    : <MaterialIcon name='video-library' size={23} color='silver' />
                            )
                        case 'Search':
                            return (
                                focused
                                    ? <Icon name='magnify' size={25} color='#fff' />
                                    : <Icon name='magnify' size={25} color='silver' />
                            )
                        case 'Profile':
                            return (
                                focused
                                    ? <Icon name='account' size={25} color='#fff' />
                                    : <Icon name='account' size={25} color='silver' />
                            )
                    }
                }
            })}

            tabBarOptions={{
                inactiveTintColor: 'silver',
                activeTintColor: '#fff',
                style: {
                    backgroundColor: '#000',
                    borderTopWidth: 0
                },
                showLabel: false
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Browse" component={BrowseNavStack} />
            <Tab.Screen name="Search" component={SearchStackScreen} />
            <Tab.Screen name="Library" component={Library} />
            {
                isAuth
                ? <Tab.Screen name="Profile" component={ProfileStackScreen} />
                : null
            }
        </Tab.Navigator>
    )
}