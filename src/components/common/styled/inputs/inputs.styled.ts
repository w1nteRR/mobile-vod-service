import styled from 'styled-components/native'

export interface ICheckBoxCustomStyledProps {
    isActive: boolean
}

export const CheckboxCustomS = styled.View<ICheckBoxCustomStyledProps>`
    width: 100px;
    height: 50px;

    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    background-color: ${props => props.isActive ? '#1c1c1c' : 'transparent'};
`