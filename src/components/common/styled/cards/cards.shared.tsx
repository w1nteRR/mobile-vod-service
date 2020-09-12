import React, { FC } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Card } from './cards.styled'
import { Container, ModalContainer } from '../../utils/layout'

import { Button } from '../buttons/buttons.shared'
import { MAIN } from '../../utils/colors'
import { TextT, Describe } from '../../utils/typography'

import { IP } from '../../../../env'


interface ICardProps {
    w?: string
    h?: string
    m?: string
}

interface IBgImgCardProps extends ICardProps {
    img: string,
    resizeMode: string
    onPress?: () => void
}

interface IEpisodeCardProps {
    name: string
    describe: string
    img: string
    onPress?: () => void
}

export const BgImgCard: FC<IBgImgCardProps> = ({ 
    w, 
    h, 
    m, 
    img,
    resizeMode,
    onPress
}) => 
    <TouchableOpacity 
        onPress={onPress} 
        activeOpacity={.8}
    >
        <Card 
            w={w} 
            h={h} 
            m={m}
        >
            <Image 
                source={{uri: `${IP}${img}`}}
                resizeMode={resizeMode}
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
    onPress
}) => 
    <>
    <BgImgCard 
        onPress={onPress}
        resizeMode='cover' 
        h='200px' 
        img={img}
    >
    </BgImgCard>
    <Container bgColor={MAIN} direction='column' p='20px'>
        <Container justify='flex-start' m='10px 0'>
            <TextT>{name}</TextT>
        </Container>
        <Container>
            <Describe>{describe}</Describe>
        </Container>
    </Container>
    </>

