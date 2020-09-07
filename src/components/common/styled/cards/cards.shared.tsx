import React, { FC } from 'react'
import { Image } from 'react-native'

import { Card } from './cards.styled'

import { IP } from '../../../../env'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface ICardProps {
    w?: string
    h?: string
    m?: string
}

interface IBgImgCardProps extends ICardProps {
    img: string
    onPress?: () => void
}

export const BgImgCard: FC<IBgImgCardProps> = ({ 
    w, 
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
            w={w} 
            h={h} 
            m={m}
        >
            <Image 
                source={{uri: `${IP}${img}`}}
                style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: '100%'
                }} 
            />
        </Card>
    </TouchableOpacity>

