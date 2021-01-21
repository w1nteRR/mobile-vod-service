import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { About } from '../../components/Film/scrollviews/About'
import { Cast } from '../../components/Film/scrollviews/Cast'
import { Similar } from '../../components/Film/scrollviews/similar.view'
import { Rating } from '../../components/Film/scrollviews/Rating'
import { Series } from '../../components/Film/scrollviews/Series'

import { Intro } from '../../components/Film/intro/Intro'
import { Control } from '../../components/Film/control/film.control'
import { ContinueModal } from '../../components/Film/modal/continue.modal'

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

    const navigation = useNavigation()

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

    const isSerial = film.type === 'Serial'

    return (
            <Background>
                <ScrollView>
                    <Intro 
                        wallpaper={film.wallpaper} 
                        name={film.name}
                        genr={film.genr}
                        duration={film.duration}
                        year={film.year} 
                    />
                    <Control filmId={film._id} isSerial={isSerial} />
                    <About 
                        describe={film.describe}
                        onArrowClick={() => navigation.navigate('About', {
                            filmName: film.name
                        })} 
                    />
                    <Rating name={film.name} />
                    {
                        isSerial
                        &&
                        <Series
                            series={film.series || []}
                            name={film.name} 
                        />
                    }
                    {
                        film.cast.length > 0 
                        && 
                        <Cast 
                            cast={film.cast.slice(0, 3)}
                            onArrowClick={() => navigation.navigate('Cast', {
                                cast: film.cast,
                                name: film.name
                            })} 
                        /> 
                    }
                    {
                        similar.length > 0 
                        && 
                        <Similar similar={similar} />
                    }
                </ScrollView>
                {/* <ContinueModal /> */}
        </Background>
    )
}
