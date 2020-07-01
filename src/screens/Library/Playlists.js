import React, { useContext } from 'react'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Background, Container } from '../../components/styled/screens'
import { Header } from '../../components/shared/Header'

import BottomCircleBtn from '../../components/buttons/BottomCircle.button'

import { AuthContext } from '../../context'
import { useAxios } from '../../hooks/useAxios'
import { Text } from '../../components/styled/typography'
import { Button } from '../../components/shared/Button'

const Playlists = () => {
    const navigation = useNavigation()
    const { userId } = useContext(AuthContext)

    const { res, loading } = useAxios(`/library/playlists/${userId}`)

    if(loading) {
        return (
            <Background>
                <Text>loading</Text>
            </Background>
        )
    }
    
    return (
        <Background>
            <Header title='Playlists' />
            <BottomCircleBtn 
                iconName='plus-circle'
                onPress={() => navigation.navigate('PlaylistCreationModal')}
            />
            <Container m='50px 0' p='10px'>
                <ScrollView>
                {
                    res.playlists.map(playlist => (
                        <Button 
                            m='20px 0'
                            key={playlist.id}
                            text={playlist.playlistName} 
                            type='dark' 
                            iconName='dots-vertical' 
                            iconColor='#fff'
                            justify='space-between'
                            onPress={() => navigation.navigate('')}
                            onIconPress={() => navigation.navigate('PlaylistManageModal', {
                                playlistId: playlist.id,
                                playlistName: playlist.playlistName
                            })}
                        />
                    ))
                }
                </ScrollView>
            </Container>
        </Background>
    )
}

export default Playlists