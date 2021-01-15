import styled from 'styled-components/native'
import { MAIN } from './colors'

interface IContainerProps {
    w?: string,
    h?: string,
    minH?: string,
    maxH?: string,
    align?: string,
    justify?: string,
    direction?: string,
    wrap?: string,
    m?: string,
    p?: string,
    bgColor?: string,
    shadow?: boolean
}

export const Container = styled.View<IContainerProps>`
    width: ${props => props.w || '100%'};
    height: ${props => props.h || 'auto'};
    min-height: ${props => props.minH || 'auto'};
    max-height: ${props => props.maxH || 'auto'};
    display: flex;
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    flex-direction: ${props => props.direction || 'row'};
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    
    margin: ${props => props.m || '0'};
    padding: ${props => props.p || '0'};
    background-color: ${props => props.bgColor || 'transparent'};
`

export const ModalContainer = styled.View`
    background-color: black;
    width: 100%;
    position: absolute;
    bottom: 0;
`

export const Background = styled.View`
    flex: 1;
    background-color: black;
`
