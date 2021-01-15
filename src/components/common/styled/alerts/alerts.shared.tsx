import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Background, Container } from '../../utils/layout'
import { Text } from '../../utils/typography'
import { Button } from '../buttons/buttons.shared'

export const NoAuth: FC = () => {

    const navigation = useNavigation()

    return (
        <Background>
            <Container 
                bgColor='' 
                direction='column' 
                justify='space-around' 
                h='50%' 
                w='100%' 
                m='0 auto' 
                style={{
                    position: 'absolute',
                    bottom: '20%'
                }}
            >
                <Container m='10px' p='50px'>
                    <Text uppercase size='12px'>
                        Library is available only to authorized users
                    </Text>
                </Container>
                <Button 
                    text='Sign In' 
                    w='350px' 
                    brRadius='10px' 
                    p='30px' 
                    bgColor='primary' 
                    onPress={() => navigation.navigate('SignIn')}
                />
            </Container>
        </Background>
    )
    
}