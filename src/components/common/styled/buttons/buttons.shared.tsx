import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ButtonStyled, IButtonStyledProps } from './buttons.styled'
import { Text } from '../../utils/typography'
import { Container } from '../../utils/layout'

interface IButton extends IButtonStyledProps {
    onPress?: () => void
    onIconPress?: () => void
    iconSize?: number
    iconColor?: string
    iconName?: string
    text?: string | number
    justify?: string
}   

export const Button: FC<IButton> = ({
    h,
    w,
    p,
    m,
    brRadius,
    bgColor,
    iconSize,
    iconColor,
    iconName,
    text,
    justify,
    onIconPress,
    onPress
}) => 
    <TouchableOpacity onPress={onPress}>
        <ButtonStyled 
            bgColor={bgColor}
            brRadius={brRadius}
            h={h}
            w={w}
            p={p}
            m={m}
        >
            <Container justify={justify} h='100%'>
            {
                iconName
                ?
                <Icon 
                    size={iconSize} 
                    color={iconColor} 
                    name={iconName}  
                    onPress={onIconPress}
                /> 
                :
                null
            }
            {
                text
                ?
                <Text uppercase weight='bold'>{text}</Text>
                :
                null
            }
            </Container>
        </ButtonStyled>
    </TouchableOpacity>
    