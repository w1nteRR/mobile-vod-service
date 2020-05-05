import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import { Header, Title, Background } from '../components/shared/screens'
import SettingsBtnWrapper from '../components/modals/Player/Settings.button'

const Library = () => {

    const navigation = useNavigation()

    return (
        <Background>
            <Header>
                <Title fontSize='30px'>library</Title>
            </Header>
            <View style={{ height: '60%' }}>
                <SettingsBtnWrapper 
                    buttonText='watch later' 
                    iconName='history' 
                    onPress={() => navigation.navigate('WatchLater')}
                />
                <SettingsBtnWrapper 
                    buttonText='liked' 
                    iconName='thumb-up' 
                    onPress={() => navigation.navigate('Liked')}
                />
                <SettingsBtnWrapper 
                    buttonText='playlists' 
                    iconName='playlist-play' 
                    onPress={() => navigation.navigate('Playlists')}
                />
            </View>
        </Background>
    )
}

export default Library