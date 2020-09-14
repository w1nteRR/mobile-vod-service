import styled from 'styled-components/native'

interface Text {
    size?: string,
    weight?: string,
    uppercase?: Boolean,
    color?: string,
    spacing?: string,
    m?: string
}

interface Title {
    color?: string
}

export const Title = styled.Text<Title>`
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${props => props.color || 'silver'};
`

export const Text = styled.Text<Text>`
    font-size: ${props => props.size || '12px'};
    font-weight: ${props => props.weight || '400'};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
    color: ${props => props.color || "silver"};
    letter-spacing: ${props => props.spacing || '0'};
    margin: ${props => props.m || '0'};
`

export const TextT = styled.Text`
    text-transform: uppercase;
    color: gray;
    font-size: 13px;
    letter-spacing: 1.2px;
`

export const Describe = styled.Text`
    font-weight: 200;
    letter-spacing: 1.1px;
    color: gray;
    font-size: 10px;
    line-height: 20px;

`