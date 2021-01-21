import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'

import { Text } from '../../utils/typography'

import { CheckboxCustomS, ICheckBoxCustomStyledProps } from './inputs.styled'

interface ICheckboxCutsomProps extends ICheckBoxCustomStyledProps {
    onPress: () => void
    text: string | number
}

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
