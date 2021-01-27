import React, { FC } from 'react'
import { ScrollView, StatusBar } from 'react-native'

import { About } from '../../components/Film/scrollviews/About'
import { Cast } from '../../components/Film/scrollviews/Cast'
import { Similar } from '../../components/Film/scrollviews/similar.view'
import { Rating } from '../../components/Film/scrollviews/Rating'
import { Series } from '../../components/Film/scrollviews/Series'

import { Intro } from '../../components/Film/intro/Intro'
import { Control } from '../../components/Film/control/film.control'
import { ContinueModal } from '../../components/Film/modal/continue.modal'

import { Background, Container } from '../../components/common/utils/layout'
import { Loader } from '../../components/common/styled/shared/loader.shared'

import { IFilmNavProps } from '../../navigation/stacks/film'

import { useStatusBar } from '../../hooks/statusbar/useStatusBar'
import { useAxios } from '../../hooks/useAxios'

import { IFilm, IFilmShort } from '../../interfaces/film/IFilm'


interface IFilmProps extends IFilmNavProps {}

export const Film: FC<IFilmProps> = ({ route }) => {

    const { res, loading } = useAxios(`/api/film/${route.params.filmId}`, {
        method: 'GET'
    })

    const { isBlack, handleStatusBarBg } = useStatusBar()

    if(loading) return <Container bgColor='black' h='100%'><Loader /></Container>

    const film: IFilm = res?.data.film
    const similar: Array<IFilmShort> = res?.data.similar

    const isSerial = film.type === 'Serial'

    return (
        <Background>
            <StatusBar backgroundColor={isBlack ? 'black' : 'transparent'}  translucent /> 
            <ScrollView onScroll={handleStatusBarBg}>
                <Intro 
                    wallpaper={film.wallpaper} 
                    name={film.name}
                    genr={film.genr}
                    duration={film.duration}
                    year={film.year} 
                />
                <Control name={film.name} filmId={film._id} isSerial={isSerial} />
                <About describe={film.describe} filmName={film.name} />
                <Rating name={film.name} /> 
                {
                    isSerial && <Series series={film.series || []} name={film.name}  />
                }
                {
                    film.cast.length > 0 && <Cast cast={film.cast} name={film.name} /> 
                }
                {
                    similar.length > 0 && <Similar similar={similar} />
                }
            </ScrollView>
            {/* <ContinueModal /> */}
        </Background>
    )
}
