import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'

import { Button } from '../common/styled/buttons/buttons.shared'

import { Container } from '../common/utils/layout'
import { Title, Text } from '../common/utils/typography'

export const HeaderFilm: FC<{ name: string, sub?: string }> = ({
    name,
    sub
}) => {

    const navigation = useNavigation()

    return (
        <Container 
            p='20px' 
            style={{
                position: 'absolute',
                top: 0
            }}
            justify='flex-start'
        >
            <Button 
                iconName='chevron-left' 
                h='40px' 
                w='40px' 
                m='0 20px 0 0'
                brRadius='10px' 
                iconSize={25}
                bgColor=''
                onPress={() => navigation.goBack()}
            />
            <Container direction='column' w='200px' align='flex-start'>
                <Title>{name}</Title>
                <Text>{sub}</Text>
            </Container>
        </Container>
    )
}