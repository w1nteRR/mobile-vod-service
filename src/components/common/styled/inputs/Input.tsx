import React, { memo } from 'react'
import { TextInput } from 'react-native'

import { MAIN } from '../../utils/colors'

interface InputProps {
    onChangeText?: (value: string) => void
    placeholder?: string
}

export const Input = memo<InputProps>(({ 
    onChangeText,
    placeholder 
}) => 
    <TextInput 
        onChangeText={onChangeText} 
        placeholder={placeholder}
        style={{ 
            width: '100%', 
            height: 'auto', 
            backgroundColor: MAIN 
        }} 
    />
)
