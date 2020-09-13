import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'

import { ModalCard } from '../../common/styled/cards/cards.shared'

import { Button } from '../../common/styled/buttons/buttons.shared'


export const PlayerModal: FC = () => {
    const navigation = useNavigation()

    return (
       <ModalCard>
            <Button 
                text='Quality' 
                bgColor='' 
                h='50px' 
                m='20px 10px' 
                w='100px'  
                onPress={() => navigation.navigate('PlayerModalQuality')}
            />
            <Button 
                text='Language' 
                bgColor='' 
                h='50px' 
                m='20px 10px' 
                w='100px' 
                onPress={() => navigation.navigate('PlayerModalLanguage')}
            />
       </ModalCard>
    )
}