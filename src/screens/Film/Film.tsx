import React, { FC } from 'react'
import { ScrollView } from 'react-native'

import { About } from '../../components/Film/scrollviews/About'
import { Cast } from '../../components/Film/scrollviews/Cast'
import { Info } from '../../components/Film/scrollviews/Info'
import { Similar } from '../../components/Film/scrollviews/Similar'

import { Intro } from '../../components/Film/intro/Intro'
import { Control } from '../../components/Film/control/Control'

import { Title } from '../../components/common/utils/typography'
import { Background, Container } from '../../components/common/utils/layout'

import { useAxios } from '../../hooks/useAxios'

import { IFilm, IFilmShort } from '../../interfaces/film/IFilm'
import { IFilmNavProps } from '../../navigation/stacks/film'


interface IFilmProps extends IFilmNavProps {}

export const Film: FC<IFilmProps> = ({ route }) => {

    const { res, loading } = useAxios(`/api/film/${route.params.filmId}`, {
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
    const similar: Array<IFilmShort> = res?.data.similar

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
                    <Similar similar={similar} />
                </ScrollView>
        </Background>
    )
}
