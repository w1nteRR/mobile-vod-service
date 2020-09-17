import React, { FC } from 'react'
import { Dimensions, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

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
    img: string,
    onPress?: () => void
}

interface IEpisodeCardProps {
    name: string
    describe: string
    img: string
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
    onPress
}) => 
    <TouchableOpacity 
        onPress={onPress} 
        activeOpacity={.8}
    >
        <Card 
            w={width || w - 20 + 'px'} 
            h={h || '200px'} 
            m={m || '10px'}
        >
            <Image 
                source={{uri: `${IP}${img}`}}
                resizeMethod='resize'
                resizeMode='cover'
                style={{
                    width: '100%',
                    height: '100%'
                }}
            />
        </Card>
    </TouchableOpacity>

export const ModalCard: FC = ({
    children
}) => {

    const navigation = useNavigation()

    return (
        <ModalContainer>
            <Container justify='flex-start'>
                <Button 
                    w='50px'
                    h='50px'
                    iconName='chevron-left' 
                    iconSize={30} 
                    bgColor='dark' 
                    text='' 
                    onPress={() => navigation.goBack()} 
                />
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
    onPress
}) => 
    <Container direction='column' m='0 20px'>
        <BgImgCard 
            onPress={onPress}
            h='200px'
            w={w} 
            img={img}
        >
        </BgImgCard>
        <Container 
            bgColor={MAIN} 
            w={w} 
            direction='column' 
            h='200px' 
            p='20px' 
            justify='space-around'
            style={{ borderRadius: 10 }}
        >
            <Container justify='flex-start' m='0 0 10px'>
                <TextT>{name}</TextT>
            </Container>
            <Container h='50px'>
                <Describe>{describe}</Describe>
            </Container>
        </Container>
    </Container>

export const FilmDetails: FC<IFilmDetails> = ({
    describe,
    name,
    genr,
    img,
    h
}) =>  
    <Container direction='column' w={w - 20 + 'px'} m='10px'>
        <BgImgCard img={img} />
        <Container 
            bgColor={MAIN} 
            h={h || '200px'}
            m='20px 0' 
            p='20px' 
            direction='column' 
            style={{ borderRadius: 10 }}
            justify='space-between'
        >
            <Container justify='flex-start'>
                <TextT>{name}</TextT>
            </Container>
            <Describe>{describe}</Describe>
            {
                genr
                ?   
                    <Container wrap='true' justify='space-around'>
                        {
                            genr.slice(0, 3).map((genr, index) => 
                            <Tag 
                                key={index}
                            >
                                <Text size='10px'>{genr}</Text>
                            </Tag>
                        )
                        }
                    </Container>
                :   null
            }
        </Container>
    </Container>
