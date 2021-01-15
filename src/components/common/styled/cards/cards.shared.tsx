import React, { FC, ReactNode } from 'react'
import { Dimensions, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import { Card } from './cards.styled'
import { Container, ModalContainer } from '../../utils/layout'

import { Button } from '../buttons/buttons.shared'
import { MAIN } from '../../utils/colors'
import { Describe, Text, TextT } from '../../utils/typography'

import { IP } from '../../../../env'
import { Tag } from '../shared/shared'


interface ICardProps {
    width?: string
    h?: string
    m?: string
}

interface IBgImgCardProps extends ICardProps {
    img: string
    onPress?: () => void
    onLongPress?: () => void
    brRadius?: number
}

interface IEpisodeCardProps {
    name: string
    describe: string
    img: string
    duration?: string
    w?: string
    onPress?: () => void
}

interface IFilmDetails {
    name?: string
    describe?: string
    genr?: Array<string>
    img: string
    h?: string
}

const w = Dimensions.get('window').width

export const BgImgCard: FC<IBgImgCardProps> = ({ 
    width, 
    h, 
    m, 
    img,
    onPress,
    onLongPress,
    brRadius
}) => 
    <TouchableOpacity 
        onPress={onPress}
        onLongPress={onLongPress}
        activeOpacity={.8}
    >
        <Card 
            w={width || w - 20 + 'px'} 
            h={h || '200px'} 
            m={m || '10px'}
        >
            <Image 
                source={{uri: `${IP}${img}` }}
                resizeMethod='resize'
                resizeMode='cover'
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: brRadius || 0
                }}
            />
        </Card>
    </TouchableOpacity>

export const ModalCard: FC<{ right?: ReactNode }> = ({
    children,
    right
}) => {

    const navigation = useNavigation()

    return (
        <ModalContainer>
            <Container justify='flex-start' style={{ borderTopColor: 'silver', borderTopWidth: .5 }}>
                <Button 
                    w='50px'
                    h='50px'
                    iconName='chevron-left' 
                    iconSize={30} 
                    bgColor='' 
                    onPress={() => navigation.goBack()} 
                />
                {right}
            </Container>
            {children}
        </ModalContainer>
    )
}

export const EpisodeCard: FC<IEpisodeCardProps> = ({
    describe,
    name,
    img,
    w,
    duration,
    onPress
}) => 
    <TouchableOpacity onPress={onPress} activeOpacity={.9}>
        <Container direction='column' h='200px' m='0 10px' w={w}>
            <BgImgCard img={img} brRadius={10} />
            <Container  
                style={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                }}
            >
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0) 0%', 'rgba(0, 0, 0, 0.8) 33.23%', 'black']} 
                    style={{
                        flex: 1,
                        height: '100%',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Container align='flex-start' p='0 20px 10px' direction='column'>
                        <Text size='20px' weight='bold' color='#fff' m='20px 0'>{name}</Text>
                        {/* <Text size='10px'>{describe}</Text> */}
                    </Container>
                    {/* <Container justify='flex-end' p='0 20px'>
                        <Text weight='bold' color='#fff' m='10px 0 0'>{duration}</Text>
                    </Container> */}
                </LinearGradient>
            </Container>
        </Container>
    </TouchableOpacity>

export const FilmDetails: FC<IFilmDetails> = ({
    describe,
    name,
    genr,
    img,
    h
}) =>  
    <Container direction='column' justify='flex-start' h='300px' w={w - 20 + 'px'} m='10px'>
        <BgImgCard img={img} brRadius={10} />
        <Container 
            direction='column' 
            justify='space-between'
        >
            <Container justify='flex-start'>
                <Text color='#fff' size='26px' m='10px 0' weight='bold'>{name}</Text>
            </Container>
            {/* <Describe>{describe}</Describe> */}
            {
                genr
                ?   
                    <Container justify='flex-start'>
                        {
                            genr.slice(0, 3).map((genr, index) => 
                                <Text key={index} weight='bold' size='13px' color='gray' m='10px 10px 0 0'>{genr}</Text>
                            )
                        }
                    </Container>
                :   null
            }
        </Container>
    </Container>
