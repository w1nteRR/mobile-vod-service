import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { RouteProp } from '@react-navigation/native'

import { About } from '../../components/Film/scrollviews/About'
import { Cast } from '../../components/Film/scrollviews/Cast'
import { Info } from '../../components/Film/scrollviews/Info'

import { Title } from '../../components/styled/typography'
import { Background, Container } from '../../components/common/utils/layout'

import { useAxios } from '../../hooks/useAxios'
import { IFilm } from '../../interfaces/film/IFilm'
import { Intro } from '../../components/Film/intro/Intro'
import { Control } from '../../components/Film/control/Control'
import { FilmsCarousel } from '../../components/Home/Films.carousel'


type FilmParams = {
    Film: {
        itemId: string
    }
}

interface IFilmProps {
    route: RouteProp<FilmParams, 'Film'>
}

export const Film: FC<IFilmProps> = ({ route }) => {


    const { res, loading } = useAxios(`/api/film/${route.params.itemId}`, {
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

    const film: IFilm = res?.data.film

    return (
            <Background>
                <ScrollView>
                    <Intro 
                        wallpaper={film.wallpaper} 
                        name={film.name} 
                    />
                    <Control filmId={film._id} />
                    <About 
                        genr={film.genr}
                        duration={film.duration}
                        year={film.year}
                        describe={film.describe}
                    />
                    <Cast cast={film.cast} />
                    <Info
                        director={film.director}
                        country={film.country}
                        audio={film.audio}
                        company={film.company}
                        subtitles={film.subtitles}
                        release={film.release}
                    />
                    {/* <Similar similar={res.similar} /> */}
                </ScrollView>
        </Background>
    )
}
