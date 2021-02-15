import React, { memo } from 'react'
import { TextInput } from 'react-native'

interface InputProps {
    onChangeText?: (value: string) => void
    placeholder?: string
    bgColor?: string
}

export const Input = memo<InputProps>(({ 
    onChangeText,
    placeholder,
    bgColor 
}) => 
    <TextInput 
        onChangeText={onChangeText} 
        placeholder={placeholder}
        style={{ 
            width: '100%', 
            height: 'auto', 
            backgroundColor: bgColor
        }} 
    />
)
