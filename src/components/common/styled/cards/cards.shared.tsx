import React, { FC } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { Card } from './cards.styled'

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

