import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'

import { Title } from '../../../components/styled/typography'
import { ModalContainer, Container } from '../../../components/styled/screens'
import { MAIN, PRIMARY } from '../../../components/styled/colors'

import { useAxios } from '../../../hooks/useAxios'
import { usePlaylist } from '../../../hooks/library/usePlaylist'

import { AuthContext } from '../../../context'

const PlaylistModal = ({ route }) => {
    const navigation = useNavigation()
    const { userId } = useContext(AuthContext)
    const { addToPlaylist } = usePlaylist()

    const { res, loading } = useAxios(`/library/playlists/${userId}`)

    if(loading) {
        return (
            <ModalContainer>
                <Container 
                    h='70%'
                    bgColor={MAIN}
                    direction='column'
                    justify='flex-start'
                >
                    <Title>Loading</Title>
                </Container>
            </ModalContainer>
        )
    }
    
    return (
        <ModalContainer>
            <Container 
                h='70%'
                bgColor={MAIN}
                direction='column'
                justify='flex-start'
            >
                <SettingsBtnWrapper 
                    iconName='keyboard-return'
                    onPress={() => navigation.goBack()}  
                />   

                <SettingsBtnWrapper 
                    buttonText='create new'
                    iconName='plus'
                    iconColor={PRIMARY}
                    onPress={() => navigation.navigate('PlaylistCreationModal')} 
                />
                <ScrollView>
                    {
                        res.playlists.map(playlist => (
                            <Container m='10px 0'>
                                <SettingsBtnWrapper
                                    key={playlist.id}
                                    buttonText={playlist.playlistName} 
                                    onPress={() => addToPlaylist(playlist.id, route.params.filmId)}
                                />
                            </Container>
                        ))
                    }
                </ScrollView>
            </Container>
        </ModalContainer>
    )
}

export default PlaylistModal