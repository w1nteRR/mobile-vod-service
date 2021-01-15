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
    font-weight: bold;
    color: ${props => props.color || '#fff'};
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
    font-size: 10px;
    letter-spacing: 1px;
`

export const Describe = styled.Text`
    color: silver;
    font-size: 13.9px;;
    line-height: 20px;
`