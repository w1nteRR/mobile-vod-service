import React from 'react'
import { useNavigation } from '@react-navigation/native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'

import { PRIMARY, DANGER, MAIN } from '../../../components/styled/colors'
import { ModalContainer, Container } from '../../../components/styled/screens'

export const PlaylistManageModal = ({ route }) => {
    const navigation = useNavigation()

    return (
        <ModalContainer>
            <Container 
                h='40%'
                bgColor={MAIN}
                justfiy='flex-start'
                direction='column'
            >
                <SettingsBtnWrapper 
                    iconName='keyboard-return'
                    onPress={() => navigation.goBack()}  
                />            
                <SettingsBtnWrapper 
                    buttonText='change name'
                    iconName='pencil'
                    iconColor='silver'
                    onPress={() => navigation.navigate('PlaylistChangeNameModal', {
                        playlistName: route.params.playlistName,
                        playlistId: route.params.playlistId
                    })} 
                />
                <SettingsBtnWrapper 
                    buttonText='share'
                    iconName='share-variant'
                    iconColor={PRIMARY}
                />
                <SettingsBtnWrapper 
                    buttonText='delete'
                    iconName='delete'
                    iconColor={DANGER}
                    onPress={() => navigation.navigate('PlaylistDeleteAlertModal', {
                        playlistId: route.params.playlistId
                    })} 
                />
            </Container>
        </ModalContainer>
    )
}
