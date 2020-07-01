import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Background, Container } from '../components/styled/screens'
import { PRIMARY, DANGER, SUCCESS } from '../components/styled/colors'

import { Header } from '../components/shared/Header'
import { Button } from '../components/shared/Button'

const Library = () => {

    const navigation = useNavigation()

    return (
        <Background>
            <Header title='Library' />
            <Container
                direction='column'
                h='70%'
                justify='space-around'
                
            >
                <Button 
                    text='Liked' 
                    type='dark' 
                    iconName='thumb-up'
                    iconColor={SUCCESS}
                    justify='space-around'
                    reverse
                    onPress={() => navigation.navigate('Liked')}
                />
                <Button 
                    text='Following' 
                    type='dark' 
                    iconName='heart'
                    iconColor={DANGER}
                    justify='space-around'
                    reverse
                    onPress={() => navigation.navigate('Following')}
                />
                <Button 
                    text='Playlists' 
                    type='dark' 
                    iconName='playlist-play'
                    iconColor='silver'
                    justify='space-around'
                    reverse
                    onPress={() => navigation.navigate('Playlists')}
                />
                <Button 
                    text='Watch later' 
                    type='dark' 
                    iconName='history'
                    iconColor={PRIMARY}
                    justify='space-around'
                    reverse
                    onPress={() => navigation.navigate('WatchLater')}
                />
            </Container>
        </Background>
    )
}

export default Library