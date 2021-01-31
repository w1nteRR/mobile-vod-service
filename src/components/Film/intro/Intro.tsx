import React, { memo } from 'react'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../../common/styled/buttons/buttons.shared'

import { BgImgCard } from '../../common/styled/cards/cards.shared'
import { Container } from '../../common/utils/layout'
import { Text } from '../../common/utils/typography'

interface IIntroProps {
    wallpaper: string
    name: string
    genr: Array<string>
    year: number
    duration: string
}

const { width } = Dimensions.get('screen')

export const Intro = memo<IIntroProps>(({
    wallpaper,
    name,
    genr,
    year,
    duration
}) => {

    const navigation = useNavigation()

    return (
        <Container h='450px' direction='column'>
            <BgImgCard img={wallpaper} h='100%' width={width + 'px'} />
            <Container
                h='50px'
                justify='flex-start'
                p='0px 10px'
                style={{ position: 'absolute', top: 30, zIndex: 2 }}
            >
                <Button
                    onPress={() => navigation.goBack()}
                    bgColor=''
                    w='35px'
                    iconSize={25}
                    iconName='arrow-left'
                />
            </Container>
            <Container
                style={{
                    position: 'absolute',
                    top: 0,
                    height: 475                
                }}
            >
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0) 0%', 'rgba(0, 0, 0, 0.5) 33.23%', 'black']}
                    style={{
                        flex: 1,
                        height: '100%',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Container p='20px' direction='column'>
                        <Container>
                            <Text weight='bold' color='#fff' size='36px'>{name}</Text>
                        </Container>
                        <Container m='20px 0 0'>
                            {
                                genr.map((genr, index) =>
                                    <Text
                                        key={index}
                                        {...font}
                                    >
                                        {genr}
                                    </Text>
                                )
                            }
                            <Text {...font}>{year}</Text>
                            <Text {...font}>{duration}</Text>
                        </Container>
                    </Container>
                </LinearGradient>
            </Container>
        </Container>
    )
})

const font = {
    size: '9px',
    weight: 'bold',
    color: 'gray',
    style: {
        marginRight: 10
    }
}
