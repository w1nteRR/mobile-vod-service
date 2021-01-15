import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'

import { Background } from '../../components/common/utils/layout'
import { Text } from '../../components/common/utils/typography'
import { Plot } from '../../components/About/plot.about'
import { ScrollView } from 'react-native-gesture-handler'

import { ScrollContainer } from '../../components/Film/scrollviews/Scroll.container'
import { InfoList } from '../../components/About/info.list'

import type { AboutRouteProp } from '../../navigation/stacks/film'
import { HeaderFilm } from '../../components/Film/header.film'


export const About: FC<{ route: AboutRouteProp }> = ({
    route
}) => {

    const [film, setFilm] = useState<any>({})

    useEffect(() => {
        (async () => {
            try {

                console.log('call')

                const res = await axios.get(`http://www.omdbapi.com/?t=${route.params.filmName}&apikey=507695cd`)

                setFilm(res.data)

            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

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