import React, { FC } from 'react'
import { Dimensions } from 'react-native'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { ModalCard } from '../../common/styled/cards/cards.shared'
import { Button } from '../../common/styled/buttons/buttons.shared'

import { DANGER } from '../../common/utils/colors'
import { Container } from '../../common/utils/layout'
import { TextT } from '../../common/utils/typography'

import { useLibrary } from '../../../hooks/library/useLibrary'
import { useAxios } from '../../../hooks/useAxios'

import { RootState } from '../../../redux/rootReducer'

type Params = {
    LibraryModal: {
        filmId: string
    }
}

type ModalRouteProp = RouteProp<Params, 'LibraryModal'>

interface LibraryModalProps {
    route: ModalRouteProp
}

export const LibraryModal: FC<LibraryModalProps> = ({ route }) => {


    const token = useSelector((state: RootState) => state.auth.token)

    const { res, loading } = useAxios('/api/library/watch-later/status', {
        method: 'POST',
        data: {
            _id: route.params.filmId,
            token
        }
    })

    const { addToWatchLater, removeFromWatchLater } = useLibrary(route.params.filmId)

    const navigation = useNavigation()

    if(loading) return (
        <ModalCard>
            <Container h='200px'>
                <TextT>loading...</TextT>
            </Container>
        </ModalCard>
    )

    const wlStatus = res?.data.watchLater

    const w = Dimensions.get('window').width - 10

    const back = () => navigation.goBack()
    
    return (
        <ModalCard>
            <Container h='200px'>
                <Button 
                    text={wlStatus ? 'Remove from watch later' : 'Add to watch later'} 
                    bgColor='dark' 
                    iconName='clock'
                    iconColor={wlStatus ? DANGER : '#fff'} 
                    iconSize={20}
                    justify='space-between' 
                    w={w + 'px'} 
                    p='40px' 
                    m='10px'  
                    onPress={
                        wlStatus 
                        ? () => removeFromWatchLater(back) 
                        : () => addToWatchLater(back)
                    }
                />
            </Container>
        </ModalCard>
    )
}