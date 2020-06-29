import React from 'react'
import { ScrollView } from 'react-native'

import { About } from '../../components/Film/ScrollContainers/About'
import { Storyline } from '../../components/Film/ScrollContainers/Storyline'
import { Cast } from '../../components/Film/ScrollContainers/Cast'
import { Info } from '../../components/Film/ScrollContainers/Info'
import { Similar } from '../../components/Film/ScrollContainers/Similar'

import { HiddenView } from '../../components/Film/HiddenView'
import { Header } from '../../components/Film/Header'
import { Title } from '../../components/styled/typography'
import { Background, Container } from '../../components/styled/screens'

import { useAxios } from '../../hooks/useAxios'

import { RatingContextProvider } from '../../reducers/Rating'

const Film = ({ route }) => {

    const { res, loading } = useAxios(`/film/${route.params.itemId}`, {
        method: 'GET'
    })

    if(loading) {
        return (
            <Background>
                <Container h='100%'>
                    <Title>Loading...</Title>
                </Container>
            </Background>
        )
    }

    return (
        <RatingContextProvider filmId={res.film._id} filmName={res.film.name}>
            <Background>
            <ScrollView>
                <Header 
                    wallpaper={res.film.wallpaper}
                    name={res.film.name} 
                />
                <HiddenView />                
                <About
                    genr={res.film.genr || []} 
                    duration={res.film.duration}
                    year={res.film.year} 
                />
                <Storyline
                    describe={res.film.describe} 
                />
                <Cast 
                    cast={res.film.cast} 
                />
                <Info
                    director={res.film.director}
                    country={res.film.country}
                    audio={res.film.audio}
                    company={res.film.company}
                    subtitles={res.film.subtitles}
                    release={res.film.release}
                />
                <Similar similar={res.similar} />
            </ScrollView>
        </Background>
        </RatingContextProvider>
    )
}

export default Film
