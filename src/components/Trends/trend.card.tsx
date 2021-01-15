import React, { FC, useState } from 'react'
import { Animated, Easing } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from '../common/styled/buttons/buttons.shared'
import { BgImgCard } from '../common/styled/cards/cards.shared'
import { Container } from '../common/utils/layout'
import { Text } from '../common/utils/typography'

export const TrendCard: FC<{ image: string, name: string }> = ({
    image,
    name
}) => {

    const [bottom] = useState(new Animated.Value(0))

    Animated.timing(bottom, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false
    }).start()

    return (
        <Container
            direction='column'
            w='380px'
            m='10px'
        >
            <BgImgCard img={image} h='400px' brRadius={10} />
            <Container  
                style={{
                    position: 'absolute',
                    top: 0,
                    height: '100%'
                }}
            >
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.2) 0%', 'rgba(0, 0, 0, 0.2) 33.23%', 'black']} 
                    style={{
                        flex: 1,
                        height: '100%',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Animated.View
                        style={{
                            padding: 20,
                            opacity: bottom
                        }}
                    >
                        <Container justify='space-between'>
                            <Text size='30px' weight='bold' color='#fff'>{name}</Text>
                            {/* <Button 
                                bgColor='dark' 
                                iconName='playlist-plus' 
                                iconSize={20}
                                h='45px' 
                                w='45px' 
                                brRadius='10px'  
                            /> */}
                        </Container>
                    </Animated.View>
                </LinearGradient>
            </Container>
        </Container>
    )
}