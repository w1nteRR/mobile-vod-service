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
    justify-content: space-around;
    padding: 20px;
`

export const Button = ({ text, onPress, type, iconName, iconColor }) =>
    <TouchableOpacity onPress={onPress}>
        <ButtonStyled bgColor={type}>
            <Icon 
                size={25} 
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


