import React  from 'react'
import { useSelector } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { TabNavigator } from '../navigation/tabs/Tab.navigator'

import { AuthStackScreen } from './stacks/auth'
import { FilmStackScreen } from './stacks/film'

import { HeaderBtn } from '../components/common/styled/shared/shared'

import { useAuth } from '../hooks/auth/useAuth'

import { RootState } from '../redux/rootReducer'
import { Container } from '../components/common/utils/layout'
import { MAIN } from '../components/common/utils/colors'
import { Title } from '../components/common/utils/typography'
import { EpisodeModal } from '../components/Episodes/episode.modal'

const Stack = createStackNavigator()

export const RootStackScreen = () => {

    const { loading } = useAuth()

    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated)

    if(loading) return <Container h='100%' bgColor={MAIN}>
        <Title>Checking auth</Title>
    </Container>

           
    return (
        <NavigationContainer>
            <Stack.Navigator 
                mode='modal' 
            >
                {
                    !isAuth
                    &&
                    <Stack.Screen
                        name='SignIn'
                        component={AuthStackScreen}
                        options={{
                            header: () => null
                        }}
                    />
                }       
                <Stack.Screen
                    name="Main"
                    component={TabNavigator}
                    options={{ 
                        headerRight: () => <HeaderBtn isAuth={isAuth}  />,
                        headerTitle: '',
                        headerStyle: {
                            backgroundColor: 'black'
                        },
                        headerRightContainerStyle: {
                            padding: 20
                        }
                    }}
        
                />
                <Stack.Screen
                    name="FilmRoot"
                    component={FilmStackScreen}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen 
                    name='EpisodeModal' 
                    component={EpisodeModal} 
                    options={modalStyle} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const modalStyle = {
    cardStyle: {
        backgroundColor: 'transparent'
    },
    header: () => null
}
