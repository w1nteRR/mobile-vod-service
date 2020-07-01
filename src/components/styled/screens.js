import styled from 'styled-components'

import { MAIN } from './colors'

export const Background = styled.View`
    flex: 1;
    background-color: ${MAIN};
`

export const Container = styled.View`
    display: flex;
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap' };
    flex-direction: ${props => props.direction || 'row'};
    margin: ${props => props.m || '0'};
    padding: ${props => props.p || '0'};
    width: ${props => props.w || '100%'};
    height: ${props => props.h || 'auto'};

    background-color: ${props => props.bgColor || 'transparent'};
`

export const ModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`
