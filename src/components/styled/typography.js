import styled from 'styled-components'

export const Title = styled.Text`
    color: #fff;
    font-size: ${props => props.fontSize || '15px'};
    text-transform: uppercase;
    font-weight: 700;

    margin: ${props => props.m || '0'};
    padding: ${props => props.p || '0'};
`

export const Text = styled.Text`
    color: ${props => props.color || 'black'};
    font-size: ${props => props.size || '15px'};
    font-weight: ${props => props.weight || 'normal'};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};

    margin: ${props => props.m || '0'};
    padding: ${props => props.p || '0'};
`