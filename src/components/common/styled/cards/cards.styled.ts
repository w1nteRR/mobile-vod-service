import styled from 'styled-components/native'

interface CardStyled {
    w?: string,
    h?: string,
    img?: string,
    m?: string
}

export const Card = styled.View<CardStyled>`
    width: ${props => props.w || '100%'};
    height: ${props => props.h || 'auto'};
    margin: ${props => props.m || '0'};
`
