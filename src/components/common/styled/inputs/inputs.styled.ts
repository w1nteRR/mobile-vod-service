import styled from 'styled-components/native'

export interface IInputStyledProps {
    w?: string
    h?: string
    p?: string
}

export interface ICheckBoxCustomStyledProps {
    isActive: boolean
}

export const InputS = styled.TextInput<IInputStyledProps>`
    width: ${props => props.w || '100%'};
    padding: ${props => props.p || '10px'};
    
    background: transparent;
    
    border: none;
    
    font-size: 15px;
`

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