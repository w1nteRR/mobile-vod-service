import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ButtonStyled, IButtonStyledProps } from './buttons.styled'
import { Text } from '../../utils/typography'

interface IButton extends IButtonStyledProps {
    onPress?: () => void
    onIconPress?: () => void
    iconSize?: number
    iconColor?: string
    iconName?: string
    text: string
}   

export const Button: FC<IButton> = ({
    h,
    w,
    p,
    brRadius,
    bgColor,
    iconSize,
    iconColor,
    iconName,
    text,
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
        >
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
        </ButtonStyled>
    </TouchableOpacity>
    