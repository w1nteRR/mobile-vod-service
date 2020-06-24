import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'
import { Input } from '../../../components/styled/inputs'

import { PRIMARY, MAIN } from '../../../components/styled/colors'
import { Container, ModalContainer } from '../../../components/styled/screens'

import { usePlaylist } from '../../../hooks/library/usePlaylist'

export const PlaylistCreationModal = () => {

    const navigation = useNavigation()
    const { createPlaylist } = usePlaylist()

    const [text, setText] = useState('')

    return (
        <ModalContainer>
            <Container 
                h='80%' 
                bgColor={MAIN} 
                justify='flex-start' 
                direction='column'
            >
                <SettingsBtnWrapper 
                    iconName='keyboard-return'
                    onPress={() => navigation.goBack()}  
                />           
                <Input 
                    placeholder='Name'
                    placeholderTextColor='silver'
                    onChangeText={text => setText(text)} 
                    autoFocus={true}
                /> 
                <SettingsBtnWrapper 
                    buttonText='create new'
                    fontColor={PRIMARY}
                    onPress={() => createPlaylist(text)}
                />
            </Container>
        </ModalContainer>
    )
}
