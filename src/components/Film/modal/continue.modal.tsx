import React, { FC, useEffect, useState } from 'react'
import { Animated, Easing, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button, WatchButton } from '../../common/styled/buttons/buttons.shared'

import { ModalCard } from '../../common/styled/cards/cards.shared'
import { MAIN } from '../../common/utils/colors'
import { Container } from '../../common/utils/layout'
import { Text, Title } from '../../common/utils/typography'

export const ContinueModal: FC = () => {

    const [height] = useState(new Animated.Value(0))
    const [isOpen, setIsOpen] = useState(true)

    const animation = (toValue: number) => Animated.timing(height, {
        toValue,
        duration: 280,
        easing: Easing.ease,
        useNativeDriver: false
    })

    if(!isOpen) return null

    animation(180).start(() => console.log('work1'))

    return (
        <Animated.View 
            style={{ 
                height, 
                position: 'absolute', 
                bottom: 0, 
                backgroundColor: MAIN, 
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: 20,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10 
            }}
        >
            <WatchButton>Continue watching</WatchButton>
            <Container m='10px' justify='space-around' w='70%'>
                <Title>Season 1</Title>
                <Text weight='bold'>Episode 1 start at 15:12</Text>
            </Container>
            <Button 
                text='Got it' 
                bgColor='' 
                w='300px' 
                p='20px' 
                m='10px'
                onPress={() => animation(0).start(() => setIsOpen(!isOpen))} 
            />
        </Animated.View>
    )
}