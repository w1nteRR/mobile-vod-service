import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { TabNavigator } from '../navigation/tabs/Tab.navigator'

import { AuthStackScreen } from './stacks/auth'
import { FilmStackScreen } from './stacks/film'
import { ProfileStackScreen } from './stacks/profile'
import { SearchStackScreen } from './stacks/search'

import { ButtonsNav } from '../components/Nav/buttons.nav'

import { Container } from '../components/common/utils/layout'
import { MAIN } from '../components/common/utils/colors'
import { Title } from '../components/common/utils/typography'

import { EpisodeModal } from '../components/Episodes/episode.modal'

import { RootState } from '../redux/rootReducer'

import { login } from '../redux/auth/actions'

import { navigationConfig } from './config/navigation.config'

const Stack = createStackNavigator()

export const RootStackScreen = () => {

    const { loading, isAuthenticated } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    if(loading) {
        dispatch(login())

        return (
            <Container h='100%' bgColor={MAIN}>
                <Title>Checking auth</Title>
            </Container>
        )
    }
           
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerRight: () => <ButtonsNav isAuth={isAuthenticated} />,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: 'black'
                    },
                    headerRightContainerStyle: {
                        padding: 20,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }
                }} 
            >
                {
                    !isAuthenticated
                    &&
                    <Stack.Screen
                        name='SignIn'
                        component={AuthStackScreen}
                        options={navigationConfig.signIn}
                    />
                }       
                <Stack.Screen
                    name="Main"
                    component={TabNavigator}
                />
                <Stack.Screen
                    name="FilmRoot"
                    component={FilmStackScreen}
                    options={navigationConfig.filmRoot}
                />
                <Stack.Screen 
                    name="ProfileRoot" 
                    component={ProfileStackScreen} 
                    options={navigationConfig.profileRoot}
                />
                <Stack.Screen 
                    name="SearchRoot" 
                    component={SearchStackScreen} 
                    options={navigationConfig.searchRoot}
                />
                <Stack.Screen 
                    name='EpisodeModal' 
                    component={EpisodeModal} 
                    options={navigationConfig.modal} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

