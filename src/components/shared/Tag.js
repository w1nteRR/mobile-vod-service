import React from 'react'
import styled from 'styled-components'

import { Text } from '../styled/typography'

const TagStyled = styled.View`
    width: 90px;
    height: 30px;
    border: .8px #fff;
    border-radius: 10px;
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
`

const TagText = styled(Text)`
    color: silver;
    font-size: 10px;
`

export const Tag = ({ value }) => 
    <TagStyled>
        <TagText>{value}</TagText>
    </TagStyled>