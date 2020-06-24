import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'
import { Input } from '../../../components/styled/inputs'

import { ModalContainer, Container } from '../../../components/styled/screens'
import { MAIN } from '../../../components/styled/colors'
import { usePlaylist } from '../../../hooks/library/usePlaylist'

export const PlaylistChangeNameModal = ({ route }) => {
    const navigation = useNavigation()
    const { editNamePlaylist } = usePlaylist()

    const [text, setText] = useState('')

    return (
        <ModalContainer>
            <Container 
                h='80%'
                bgColor={MAIN}
                direction='column'
                justify='flex-start'
            >
                <SettingsBtnWrapper 
                    iconName='keyboard-return'
                    onPress={() => navigation.goBack()}  
                />           
                <Input 
                    placeholder={route.params.playlistName}
                    placeholderTextColor='silver'
                    onChangeText={text => setText(text)} 
                    autoFocus={true}
                /> 
                <SettingsBtnWrapper 
                    buttonText='update'
                    onPress={() => editNamePlaylist(text, route.params.playlistId)}
                />
            </Container>
        </ModalContainer>
    )
}
