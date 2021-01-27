import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'

import { Button } from '../common/styled/buttons/buttons.shared'

import { Container } from '../common/utils/layout'
import { Title, TextT } from '../common/utils/typography'

export const HeaderFilm: FC<{ name: string, sub?: string }> = ({
    name,
    sub,
    children
}) => {

    const navigation = useNavigation()

    return (
        <Container 
            p='20px' 
            style={{
                position: 'absolute',
                top: 20
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
            <Container justify='space-between' w='90%'>
                <Container direction='column' align='flex-start' w='50%'>
                    <Title>{name}</Title>
                    <TextT style={{ marginTop: 5 }}>{sub}</TextT>
                </Container>
                <Container w='50%' justify='flex-end'>
                    {children}
                </Container>
            </Container>
        </Container>
    )
}