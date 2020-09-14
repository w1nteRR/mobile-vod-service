import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../../common/utils/layout'
import { Button } from '../../common/styled/buttons/buttons.shared'

interface IControlProps {
    filmId: string
}

export const Control: FC<IControlProps> = ({ filmId }) => {

    const navigation = useNavigation()

    return (
        <Container justify='space-between' p='30px 20px'>
            <Button 
                bgColor='primary' 
                w='100px' 
                p='20px'
                iconName='play' 
                iconSize={30} 
                brRadius='5px' 
                onPress={() => navigation.navigate('FilmWatch', {
                    filmId
                })}
            />
            <Button 
                bgColor='' 
                w='45px' 
                h='45px'
                iconName='dots-vertical' 
                iconSize={30} 
                brRadius='5px' 
                onPress={() => navigation.navigate('LibraryModal', {
                    filmId
                })}
            />
        </Container>
    )
}