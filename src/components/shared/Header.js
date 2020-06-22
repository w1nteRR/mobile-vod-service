import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Title } from '../styled/typography'

const HeaderStyled = styled.View`
    width: 100%;
    padding: 25px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Header = ({ title }) => 
    <HeaderStyled>
        <Title>{title}</Title>
        <Icon 
            name='bell' 
            size={20} 
            color='#fff' 
        />
    </HeaderStyled>