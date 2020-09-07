import styled from 'styled-components/native'

interface CardStyled {
    w?: string,
    h?: string,
    img?: string,
    m?: string
}

export const Card = styled.View<CardStyled>`
    width: ${props => props.w || 'auto'};
    height: ${props => props.h || '180px'};
    margin: ${props => props.m || '0'};
`
