import React, { FC, useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../common/utils/layout'
import { Button } from '../common/styled/buttons/buttons.shared'
import { Input } from '../common/styled/inputs/Input'

import { useDebounce } from '../../hooks/utils/useDebounce'

import { getFilmsByName } from '../../redux/search/actions'

export const SearchForm: FC = () => {

    const [inputVal, setInputVal] = useState('')

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const debouncedVal = useDebounce(inputVal, 1000)

    useEffect(() => { debouncedVal && dispatch(getFilmsByName(debouncedVal)) }, [debouncedVal])

    return (
        <Container 
            p='10px' 
            w='95%' 
            m='50px 0 0 20px'
            bgColor='' 
            style={{ borderRadius: 10 }}
        >
            <Button 
                iconName='chevron-left' 
                iconSize={20} 
                w='50px' 
                h='40px' 
                bgColor=''
                onPress={() => navigation.goBack()} 
            />
            <Input 
                onChangeText={useCallback((text: string) => setInputVal(text), [])} 
                placeholder='Search' 
            />   
        </Container>
    )
}