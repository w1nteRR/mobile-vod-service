import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Input } from '../components/shared/inputs'
import { Background, Header, Title } from '../components/shared/screens'

import FilmCard from '../components/Browse/FilmCard'
import SettingsBtnWrapper from '../components/modals/Player/Settings.button'

import { useSearch } from '../hooks/Search'


const Search = () => {
    const navigation = useNavigation()
    const [text, setText] = useState('')
    let films = useSearch(text) || []

    const [filtredFilms, setFiltredFilms] = useState([])


    const getData = films => {
        setFiltredFilms(films)
    }

    console.log(filtredFilms)

    return (
        <Background>
            <Header>
                <Title fontSize='30px'>search</Title>
            </Header>
            <View style={{ margin: '5%' }}>
                <Input 
                    onChangeText={text => setText(text)} 
                    placeholder='Enter film name'
                    placeholderTextColor="silver"
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Title>or add some tags and we will find</Title>
                <View>
                    <SettingsBtnWrapper
                        iconName='tune'
                        onPress={() => navigation.navigate('SearchTagsModal', {
                            getData
                        })} 
                    />
                </View>
            </View>
            <ScrollView style={{ marginTop: -100 }}>
            {
                films.map(film => (
                    <View style={{ margin: 15 }}>
                        <FilmCard item={film} />
                    </View>
                ))
            }
            {
                 filtredFilms.map(film => (
                    <View style={{ margin: 15 }}>
                        <FilmCard item={film} />
                    </View>
                ))
            }
            </ScrollView>
        </Background>
    )
}

export default Search