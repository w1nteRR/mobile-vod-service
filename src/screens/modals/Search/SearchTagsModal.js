import React from 'react'
import { useNavigation } from '@react-navigation/native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'

import { ModalContainer, Container } from '../../../components/styled/screens'
import { MAIN } from '../../../components/styled/colors'

import { SearchNav } from '../../../components/Search/Search.nav'
import { PickedTags } from '../../../components/Search/PickedTags'
import { TagPicker } from '../../../components/Search/TagPicker'

const SearchTagsModal = () => {
    const navigation = useNavigation()
   
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

                <SearchNav />
                <PickedTags />
                <TagPicker />
        
            </Container>
        </ModalContainer>
    )
}

export default SearchTagsModal
