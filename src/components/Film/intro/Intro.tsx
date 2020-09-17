import React, { FC } from 'react'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { BgImgCard } from '../../common/styled/cards/cards.shared'
import { Container } from '../../common/utils/layout'
import { Text } from '../../common/utils/typography'

interface IIntroProps {
    wallpaper: string,
    name: string
}

export const Intro: FC<IIntroProps> = ({ wallpaper, name }) => {

    const w = Dimensions.get('window').width.toFixed() + 'px'
    
    return (
        <Container h='350px' direction='column' align='flex-end'>
            <BgImgCard img={wallpaper} w={w} />
                <Container 
                    style={{
                        position: 'absolute',
                        top: 0,
                    }}
                >
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0) 0%', 'rgba(0, 0, 0, 0.8) 73.23%', '#090909']} 
                        style={{
                            flex: 1,
                            height: 350
                        }}
                    >
                        <Container align='flex-end' h='100%' p='20px'>
                            <Text weight='bold' size='30px'>{name}</Text>
                        </Container>    
                    </LinearGradient>
            </Container>
        </Container>
    )
}