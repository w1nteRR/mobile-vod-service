import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


import Profile from './screens/Profile'
import Browse from './screens/Browse'
import Library from './screens/Library'
import Search from './screens/Search'
import Film from './screens/Film/Film'
import FilmPlayer from './screens/Film/FilmPlayer'

import SettingsPlayer from './screens/modals/SettingsPlayer'
import LanguagePlayer from './screens/modals/LanguagePlayer'
import QualityPlayer from './screens/modals/QualityPlayer'

import Playlists from './screens/Library/Playlists'
import Playlist from './screens/Library/Playlist'
import Liked from './screens/Library/Liked'
import WatchLater from './screens/Library/WatchLater'

import LibraryModal from './screens/modals/Library/LibraryModal'
import PlaylistModal from './screens/modals/Library/PlaylistModal'
import PlaylistCreationModal from './screens/modals/Library/PlaylistCreationModal'
import PlaylistManageModal from './screens/modals/Library/PlaylistManageModal'
import PlaylistChangeNameModal from './screens/modals/Library/PlaylistChangeNameModal'
import PlaylistDeleteAlertModal from './screens/modals/Library/PlaylistDeleteAlertModal'

import Login from './screens/Auth/Login'
import Registration from './screens/Auth/Registration'

import Settings from './screens/Profile/Settings'
import Membership from './screens/Profile/Membership'
import Help from './screens/Profile/Help'
import History from './screens/Profile/History'
import Downloads from './screens/Profile/Downloads'
import Notifications from './screens/Profile/Notifications'

import SearchTagsModal from './screens/modals/Search/SearchTagsModal'



import { AuthContext } from './context'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const BrowseStackScreen = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Browse' component={Browse} />
            <Stack.Screen name='Film' component={Film} />
            <Stack.Screen name='FilmPlayer' component={FilmPlayer} />
            <Stack.Screen 
                name='LibraryModal' 
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}   
                component={LibraryModal} 
            />
            <Stack.Screen 
                name='PlaylistModal'  
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}  
                component={PlaylistModal} 
            />
            <Stack.Screen 
                name='PlaylistCreationModal'  
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}  
                component={PlaylistCreationModal} 
            />
           
        </Stack.Navigator>
    )
}

const SearchStackScreen = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name='Film' component={Film} />
            <Stack.Screen 
                name='SearchTagsModal'  
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}  
                component={SearchTagsModal} 
            />
        </Stack.Navigator>
    )
}

const LibraryStackScreen = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Library" component={Library} />
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name='Playlists' component={Playlists} />
            <Stack.Screen name='Playlist' component={Playlist} />
            <Stack.Screen name='Liked' component={Liked} />
            <Stack.Screen name='WatchLater' component={WatchLater} />
            <Stack.Screen 
                name='PlaylistManageModal'  
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}  
                component={PlaylistManageModal} 
            />
            <Stack.Screen 
                name='PlaylistCreationModal'  
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}  
                component={PlaylistCreationModal} 
            />
            <Stack.Screen 
                name='PlaylistChangeNameModal'  
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}  
                component={PlaylistChangeNameModal} 
            />
             <Stack.Screen 
                name='PlaylistDeleteAlertModal'  
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}  
                component={PlaylistDeleteAlertModal} 
            />
        </Stack.Navigator>
    )
}

const AuthStackScreen = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Registration' component={Registration} />
        </Stack.Navigator>
    )
}

const ProfileStackScreen = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='History' component={History} />
            <Stack.Screen name='Notifications' component={Notifications} />
            <Stack.Screen name='Downloads' component={Downloads} />
            <Stack.Screen name='Membership' component={Membership} />
            <Stack.Screen name='Help' component={Help} />
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            headerMode='none' 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    switch(route.name) {
                        case 'Browse': 
                            return (
                                focused
                                ?   <Icon name='home' size={25} color='#fff' />
                                :   <Icon name='home' size={25} color='silver' />
                            )
                        case 'Library': 
                            return (
                                focused
                                ?   <MaterialIcon name='video-library' size={23} color='#fff' />
                                :   <MaterialIcon name='video-library' size={23} color='silver' />
                            )
                        case 'Search': 
                            return (
                                focused
                                ?   <Icon name='magnify' size={25} color='#fff' />
                                :   <Icon name='magnify' size={25} color='silver' />
                            )
                        case 'Profile': 
                            return (
                                focused
                                ?   <Icon name='account' size={25} color='#fff' />
                                :   <Icon name='account' size={25} color='silver' />
                            )     
                    }
                }
            })}
            tabBarOptions={{
                inactiveTintColor: 'silver',
                activeTintColor: '#fff',
                style: {
                    backgroundColor: '#171717',
                    borderTopWidth: 0
                },
                showLabel: false
            }}
        >
            <Tab.Screen name="Browse" component={BrowseStackScreen} />
            <Tab.Screen name="Library" component={LibraryStackScreen} />
            <Tab.Screen name="Search" component={SearchStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
    )
}

export const Tabs = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="FilmPlayer" component={FilmPlayer} />            
        </Stack.Navigator>
    )
}

const PlayerModal = () => {
    return (
        <Stack.Navigator headerMode={false}>
            <Stack.Screen 
                name='SettingsPlayer'  
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}  
                component={SettingsPlayer} 
            />
            <Stack.Screen 
                name='QualityPlayer' 
                component={QualityPlayer}
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'                    
                    }
                }}  
            />
            <Stack.Screen 
                name='LanguagePlayer' 
                component={LanguagePlayer}
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent',
                    }
                }}  
            />
        </Stack.Navigator>
    )
}

const LibraryModalScreen = () => {
    return (
        <Stack.Navigator headerMode={false}>
            <Stack.Screen 
                name='LibraryModal'  
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}  
                component={LibraryModal} 
            />
            <Stack.Screen 
                name='PlaylistModal'  
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}  
                component={PlaylistModal} 
            />
            <Stack.Screen 
                name='PlaylistCreationModal'  
                options={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}  
                component={PlaylistCreationModal} 
            />
        </Stack.Navigator>
    )
}

export const RootStackScreen = () => {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <NavigationContainer>
            <Stack.Navigator mode="modal" headerMode={false}>
                {
                    isAuthenticated
                    ?    <Stack.Screen
                            name="Main"
                            component={Tabs}
                            options={{ headerShown: false }}
                        />
                    :    <Stack.Screen
                            name="Auth"
                            component={AuthStackScreen}
                            options={{ headerShown: false }}
                        />
                }
                <Stack.Screen 
                    name="SettingsPlayer" 
                    options={{
                        cardStyle: {
                            backgroundColor: 'transparent',
                            opacity: 1
                        }
                    }} 
                    component={PlayerModal} 
                />
                <Stack.Screen 
                    name="LibraryModal" 
                    options={{
                        cardStyle: {
                            backgroundColor: 'transparent',
                            opacity: 1
                        }
                    }} 
                    component={LibraryModalScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}