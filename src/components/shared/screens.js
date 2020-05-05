import styled from 'styled-components'

export const Background = styled.View`
    flex: 1;
    background-color: #171717;
`

export const Header = styled.View`
    width: 100%;
    height: 5%;
    margin-top: 5%;
`

export const Title = styled.Text`
    margin-bottom: 7%;
    margin-left: 2%;

    color: #fff;
    font-size: ${props => props.fontSize || '15px'};
    text-transform: uppercase;
    font-weight: 700;
`