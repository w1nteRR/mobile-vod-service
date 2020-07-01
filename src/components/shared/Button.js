import React from 'react'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Container } from '../styled/screens'
import { Text } from '../styled/typography'

import { MAIN, DANGER, PRIMARY } from '../styled/colors'

const buttonBgColors = bgColor => {
    switch (bgColor) {
        case 'primary':
            return PRIMARY
        case 'dark':
            return MAIN
        case 'danger':
            return DANGER
        default:
            throw new Error()
    }
}

const ButtonStyled = styled(Container)`
    background-color: ${props => buttonBgColors(props.bgColor)};
    justify-content: ${props => props.justify || 'flex-end'};
    flex-direction: ${props => props.reverse ? 'row' : 'row-reverse'};
    width: ${props => props.w || '100%'};
    padding: ${props => props.p || '20px'};
    border-radius: 5px;
`

export const Button = ({ 
    text, 
    onPress, 
    type, 
    iconName, 
    iconColor, 
    w, 
    p, 
    reverse, 
    justify, 
    iconSize 
}) =>
    <TouchableOpacity onPress={onPress}>
        <ButtonStyled 
            bgColor={type} 
            w={w} 
            p={p} 
            reverse={reverse} 
            justify={justify}
        >
            <Icon 
                size={iconSize || 20} 
                color={iconColor} 
                name={iconName}  
            />
            <Text 
                color='#fff'
                weight='bold'
                size='11px'
                uppercase
            >
                {text}
            </Text>
        </ButtonStyled>
    </TouchableOpacity>


