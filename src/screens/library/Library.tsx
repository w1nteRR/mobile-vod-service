import React, { FC } from 'react'
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../../components/common/styled/buttons/buttons.shared'

import { Background, Container } from '../../components/common/utils/layout'
import { WatchContinue } from '../../components/Library/WatchContinue'

import { Header } from '../../components/shared/Header'

export const Library: FC = () => {

    const w = Dimensions.get('window').width - 10

    const navigation = useNavigation()
    
    return (
        <Background>
            <Header title='q.' />
            <Container m='30px 0'>
                <WatchContinue />
            </Container>
            <Container direction='column' m='30px 0'>
                {
                    buttons.map((item, index) => 
                        <Button 
                            justify='space-between'
                            m='10px'
                            key={index} 
                            text={item.text}
                            bgColor='dark'
                            p='40px'
                            iconName={item.iconName}
                            iconSize={20}
                            w={w + 'px'}
                            onPress={() => navigation.navigate(item.screen)}
                        />
                    )
                }
            </Container>
        </Background>
    )
}

const buttons = [
    {
        text: 'Watch Later',
        iconName: 'clock',
        screen: 'WatchLater'
    },
    {
        text: 'Playlists',
        iconName: 'rhombus-split',
        screen: 'Playlists'
    }
]