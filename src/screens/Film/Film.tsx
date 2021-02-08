import React, { FC, useEffect, useState } from 'react'
import { ScrollView, StatusBar } from 'react-native'

import { About } from '../../components/Film/scrollviews/About'
import { Cast } from '../../components/Film/scrollviews/cast.view'
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

import { IFilm } from '../../interfaces/film/IFilm'
import { ButtonWatch } from '../../components/Film/button.watch'
import { filmApi } from '../../api/film.api'


interface IFilmProps extends IFilmNavProps {}

export const Film: FC<IFilmProps> = ({ route }) => {

    const [film, setFilm] = useState<IFilm>({} as IFilm)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isActive = true

        const fetchFilm = async () => {
            try {              
                const film = await filmApi().get(route.params.filmId)

                if(isActive) {
                    setFilm(film)
                    setLoading(false)
                }
                
            } catch (err) {
                console.log(err)
            }
        }

        fetchFilm()

        return () => {
            isActive = false
        }

    }, [])

    const { isBlack, handleStatusBarBg } = useStatusBar()

    if(loading) return <Container bgColor='black' h='100%'><Loader /></Container>
    
    const isSerial = film.type === 'Serial'

    return (
        <Background>
            <StatusBar backgroundColor={isBlack ? 'black' : 'transparent'}  translucent /> 
            <ScrollView onScroll={handleStatusBarBg} style={{ marginBottom: 75 }}>
                <Intro 
                    wallpaper={film.wallpaper} 
                    name={film.name}
                    genr={film.genr || []}
                    duration={film.duration}
                    year={film.year} 
                />
                <Control 
                    filmId={film._id} 
                    isSerial={isSerial} 
                />
                <About 
                    describe={film.describe} 
                    filmName={film.name} 
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
                <Cast 
                    cast={film.cast || []} 
                    name={film.name} 
                /> 
                <Similar tags={film.tags} filmdId={film._id} />
            </ScrollView>
            <Container style={{ position: 'absolute', bottom: 10 }}>
                <ButtonWatch filmId={film._id} name={film.name} />
            </Container>
        </Background>
    )
}
