import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import { About } from '../../components/Film/scrollviews/About'
import { Cast } from '../../components/Film/scrollviews/Cast'
import { Similar } from '../../components/Film/scrollviews/similar.view'

import { Intro } from '../../components/Film/intro/Intro'
import { Control } from '../../components/Film/control/film.control'

import { Title } from '../../components/common/utils/typography'
import { Background, Container } from '../../components/common/utils/layout'

import { useAxios } from '../../hooks/useAxios'

import { IFilm, IFilmShort } from '../../interfaces/film/IFilm'
import { IFilmNavProps } from '../../navigation/stacks/film'
import { Series } from '../../components/Film/scrollviews/Series'
import { MAIN } from '../../components/common/utils/colors'
import { ContinueModal } from '../../components/Film/modal/continue.modal'
import { Rating } from '../../components/Film/scrollviews/Rating'


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
                {/* <Container m='50px 0 auto'>
                    <Container style={{ position: 'absolute', bottom: 10 }} w='90%'>
                        <LinearGradient 
                            start={{ x: 0, y: 0 }} 
                            end={{ x: 1, y: 0 }}
                            style={{ flex: 1, width: 200, height: 50, borderRadius: 10 }} 
                            colors={['rgba(144, 127, 249, 1)', '#4EB1F9']}
                        >
                            <Container h='100%'>
                                <Title>Watch now</Title>
                            </Container>
                        </LinearGradient>
                    </Container>
                </Container> */}
                {/* <ContinueModal /> */}
        </Background>
    )
}
