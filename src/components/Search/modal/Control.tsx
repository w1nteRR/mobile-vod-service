import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../../common/styled/buttons/buttons.shared'
import { Container } from '../../common/utils/layout'

import { getFilmsByTag, removeSearchData } from '../../../redux/search/actions'
import { useSearch } from '../../../hooks/search/useSearch'


export const Control: FC = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const { resetTags } = useSearch()

    const _onSearchPress = () => {
        dispatch(getFilmsByTag())
        navigation.goBack()
    }

    const _onDeletePress = () => {
        resetTags()
        dispatch(removeSearchData())
    }
        
    return (
        <Container justify='space-between' style={{ position: "absolute", bottom: 0 }}>
            <Container w='80%' justify='flex-start' p='10px'>
                <Button 
                    text='Search' 
                    bgColor='primary' 
                    w='100%' 
                    h='45px' 
                    brRadius='5px' 
                    onPress={_onSearchPress}
                />
            </Container>
            <Container w='20%'>
                <Button 
                    text='' 
                    iconName='delete' 
                    iconSize={15} 
                    bgColor='danger' 
                    w='100%' 
                    h='45px' 
                    brRadius='5px' 
                    onPress={_onDeletePress}
                />
            </Container>
        </Container>
    )
}