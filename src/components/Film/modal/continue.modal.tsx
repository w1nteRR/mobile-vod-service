import React, { FC, useState } from 'react'
import { Animated, Easing } from 'react-native'
import { Button } from '../../common/styled/buttons/buttons.shared'

import { MAIN } from '../../common/utils/colors'
import { Container } from '../../common/utils/layout'
import { Text, Title } from '../../common/utils/typography'

export const ContinueModal: FC = () => {

    const [translateY] = useState(new Animated.Value(180))
    const [isOpen, setIsOpen] = useState(true)

    const animation = (toValue: number) => Animated.timing(translateY, {
        toValue,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true
    })

    if(!isOpen) return null

    animation(0).start(() => console.log('end'))

    return (
        <Animated.View 
            style={{ 
                position: 'absolute', 
                bottom: 0, 
                backgroundColor: MAIN, 
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: 20,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                transform: [{
                    translateY
                }] 
            }}
        >
            <Container justify='space-between'>
                <Container w='70%' direction='column' align='flex-start'>
                    <Title>Season 1</Title>
                    <Text weight='bold' m='10px 0'>Episode 1 start at 15:12</Text>
                </Container>
                <Button  
                    onPress={() => animation(180).start(() => setIsOpen(!isOpen))}
                    bgColor='danger'
                    w='45px'
                    h='45px'
                    iconName='close'
                    iconSize={20}
                    brRadius='10px'
                />
            </Container>
            <Button 
                text='' 
                bgColor='' 
                w='300px' 
                p='20px' 
                m='10px'
            />
            <Button text='Continue watching' bgColor='primary' w='350px' p='25px' brRadius='10px' />
        </Animated.View>
    )
}