import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'

import { ButtonStyled, IButtonStyledProps } from './buttons.styled'
import { Text, Title } from '../../utils/typography'
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
                <Text size='18px' color='#fff' weight='bold'>{text}</Text>
                :
                null
            }
            </Container>
        </ButtonStyled>
    </TouchableOpacity>
    
export const WatchButton: FC<{ onPress?: () => void }> = ({
    children,
    onPress
}) => 
    <TouchableOpacity onPress={onPress}>
        <Container w='90%'>
            <LinearGradient 
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }}
                style={{ flex: 1, width: 200, height: 50, borderRadius: 10 }} 
                colors={['rgba(144, 127, 249, 1)', '#4EB1F9']}
            >
                <Container h='100%'>
                    <Title>{children}</Title>
                </Container>
            </LinearGradient>
        </Container>
    </TouchableOpacity>
