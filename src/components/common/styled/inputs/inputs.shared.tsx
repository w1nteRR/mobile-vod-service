import React, { FC } from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity } from 'react-native'

import { Text } from '../../utils/typography'

import { CheckboxCustomS, ICheckBoxCustomStyledProps, IInputStyledProps, InputS } from './inputs.styled'

interface IInputProps extends IInputStyledProps {
    placeholder: string
    change(event: NativeSyntheticEvent<TextInputChangeEventData>): void
}

interface ICheckboxCutsomProps extends ICheckBoxCustomStyledProps {
    onPress: () => void
    text: string | number
}

export const Input: FC<IInputProps> = ({
    placeholder,
    w,
    p,
    h,
    change
}) => 
    <InputS 
        placeholder={placeholder}
        onChange={change}
        w={w}
        p={p}
        h={h}
    />

export const CheckboxCustom: FC<ICheckboxCutsomProps> = ({
    isActive,
    text,
    onPress
}) => 
    <TouchableOpacity onPress={onPress}>
        <CheckboxCustomS 
            isActive={isActive} 
        >
            <Text 
                color={isActive ? 'silver' : 'gray'}
            >
                {text}
            </Text>
        </CheckboxCustomS>
    </TouchableOpacity>
