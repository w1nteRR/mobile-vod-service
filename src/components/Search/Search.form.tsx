import React, { FC, useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native'

import { Container } from '../common/utils/layout'

import { Input } from '../common/styled/inputs/Input'

import { useDebounce } from '../../hooks/utils/useDebounce'

import { getFilmsByName } from '../../redux/search/actions'
import { MAIN } from '../common/utils/colors'

export const SearchForm: FC = () => {

    const [inputVal, setInputVal] = useState('')

    // const debouncedVal = useDebounce(inputVal, 1000)
    // const dispatch = useDispatch()

    // useEffect(() => { debouncedVal && dispatch(getFilmsByName(inputVal)) }, [inputVal])

    return (
        <Container 
            p='10px' 
            w='95%' 
            m='30px auto'
            bgColor={MAIN} 
            style={{ borderRadius: 10 }}
        >
            <Input 
                onChangeText={useCallback((text: string) => setInputVal(text), [])} 
                placeholder='Film name' 
            />   
        </Container>
    )
}