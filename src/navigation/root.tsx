import React  from 'react'
import { useSelector } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { TabNavigator } from '../navigation/tabs/Tab.navigator'

import { Film } from '../screens/Film/Film'
import { FilmWatchStackScreen } from './stacks/filmWatch'
import { AuthStackScreen } from './stacks/auth'

import { LibraryModal } from '../components/Library/modal/Library.modal'

import { Background } from '../components/common/utils/layout'
import { TextT } from '../components/common/utils/typography'
import { HeaderBtn } from '../components/common/styled/shared/shared'

import { useAuth } from '../hooks/auth/useAuth'

import { RootState } from '../redux/rootReducer'

const Stack = createStackNavigator()

export const RootStackScreen = () => {

    const { loading } = useAuth()

    const auth = useSelector((state: RootState) => state.auth)

    if(loading) return (
        <Background>
            <TextT>splash</TextT>
        </Background>
    )
               

    return (
        <NavigationContainer>
            <Stack.Navigator 
                mode='modal' 
                screenOptions={headerStyle}
            >
                {
                    !auth.isAuthenticated
                    &&
                    <Stack.Screen
                        name='SignIn'
                        component={AuthStackScreen}
                    />
                }       
                <Stack.Screen
                    name="Main"
                    component={TabNavigator}
                    options={{ headerRight: () => <HeaderBtn isAuth={auth.isAuthenticated}  />}}
        
                />
                <Stack.Screen
                    name="Film"
                    component={Film}
                />
                <Stack.Screen
                    name="FilmWatch"
                    component={FilmWatchStackScreen}
                />
               <Stack.Screen 
                    name="LibraryModal" 
                    component={LibraryModal}  
                    options={modalStyle}  
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const modalStyle = {
    cardStyle: {
        backgroundColor: 'transparent'
    }
}

const headerStyle = {
    title: '',
    headerStyle: {
        backgroundColor: '#090909',
    }
}
    