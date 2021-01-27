import React, { FC, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import { Background } from '../../components/common/utils/layout'
import { Text } from '../../components/common/utils/typography'
import { Plot } from '../../components/About/plot.about'

import { ScrollContainer } from '../../components/Film/scrollviews/Scroll.container'
import { InfoList } from '../../components/About/info.list'

import { HeaderFilm } from '../../components/Film/header.film'

import type { AboutRouteProp } from '../../navigation/stacks/film'


import { omdbApi } from '../../api/omdb.api'

export const About: FC<{ route: AboutRouteProp }> = ({ 
    route 
}) => {

    const { filmName } = route.params

    const [film, setFilm] = useState<any>({})

    useEffect(() => {
        let isActive = true

        const fetchRating = async () => {
            try {
                
                const res = await omdbApi().film(filmName)

                if(isActive) {
                    setFilm(res.data)
                }

            } catch (err) {
                console.log(err)
            }
        }

        fetchRating()

        return () => {
            isActive = false
        }

    }, [route.params.filmName])

    if(!film) return <Text>loading...</Text>

    return (
        <Background>
            <HeaderFilm name={route.params.filmName} sub='Details' />
            <ScrollView 
                style={{
                    marginTop: 100,
                    padding: 20,
                    height: 400
                }}
            >
                <Plot describe={film.Plot} />
                <ScrollContainer title='Info'>
                    <InfoList 
                        year={film.Year}
                        runtime={film.Runtime}
                        country={film.Country}
                        production={film.Production} 
                    />
                </ScrollContainer>
                <ScrollContainer title='Credits'>
                    <InfoList 
                        directors={film.Director}
                        writers={film.Writer}
                    />
                </ScrollContainer>
            </ScrollView>
        </Background>
    )
}