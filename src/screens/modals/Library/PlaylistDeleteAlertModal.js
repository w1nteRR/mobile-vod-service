import React from 'react'
import { useNavigation } from '@react-navigation/native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'

import { ModalContainer, Container } from '../../../components/styled/screens'
import { MAIN, DANGER } from '../../../components/styled/colors'
import { Title } from '../../../components/styled/typography'

import { usePlaylist } from '../../../hooks/library/usePlaylist'

export const PlaylistDeleteAlertModal = ({ route }) => {
    const navigation = useNavigation()

    const { deletePlaylist } = usePlaylist()

    return (
        <ModalContainer>
            <Container 
                h='40%'
                bgColor={MAIN}
                justify='flex-start'
                direction='column'
            >
                <SettingsBtnWrapper 
                    iconName='keyboard-return'
                    onPress={() => navigation.goBack()}  
                />
                <Container 
                    justify='flex-start'
                    p='20px'
                >
                    <Title>are u sure?</Title>
                </Container>           
                <SettingsBtnWrapper 
                    buttonText='delete'
                    fontColor={DANGER}
                    onPress={() => deletePlaylist(route.params.playlistId)}
                />   
            </Container>
        </ModalContainer>
    )
}
