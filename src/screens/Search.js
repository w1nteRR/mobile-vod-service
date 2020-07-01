import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import { Input } from '../components/styled/inputs'
import { Background, Container } from '../components/styled/screens'
import { Title } from '../components/styled/typography'

import { Header } from '../components/shared/Header'
import { FilmList } from '../components/Search/Film.list'

import { useDebounce } from '../hooks/useDebounce'
import { useSearch } from '../hooks/useSearch'

const Search = () => {
    const navigation = useNavigation()

    const [value, setValue] = useState('')
    const debounced = useDebounce(value, 500)

    const { searchByName } = useSearch()
    
    useEffect(() => { if(debounced) searchByName(debounced) }, [debounced])

    return (
        <Background>
            <Header title='Search' />
            <Input 
                onChangeText={value => setValue(value)}
                placeholder='Enter film name'
                placeholderTextColor="silver"
            />
            <Container m='15px 0' direction='column'>
                <Title fontSize='13px'>
                    or add some tags and we will find
                </Title>
                <Container m='20px'>
                    <Icon 
                        name='tune' 
                        color='#fff' 
                        size={25} 
                        onPress={() => navigation.navigate('SearchTagsModal')}
                    />
                </Container>
            </Container>
            <FilmList />
        </Background>
    )
}

export default Search