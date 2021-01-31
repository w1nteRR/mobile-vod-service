import React, { FC  } from 'react'
import { View, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { BgImgCard } from '../common/styled/cards/cards.shared'
import { Container } from '../common/utils/layout'
import { Text } from '../common/utils/typography'

const { width } = Dimensions.get('screen')

export const TrendCard: FC<{ image: string, name: string }> = ({
    image,
    name
}) => {

    return (
        <Container
            direction='column'
            w={width + 'px'}
        >
            <BgImgCard img={image} h='450px' brRadius={10} />
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
                    <View style={{ padding: 20 }} >
                        <Container justify='space-between'>
                            <Text size='30px' weight='bold' color='#fff'>{name}</Text>
                        </Container>
                    </View>
                </LinearGradient>
            </Container>
        </Container>
    )
}