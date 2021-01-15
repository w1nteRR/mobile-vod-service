import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { View } from 'react-native'

import { Background } from '../../components/common/utils/layout'
import { EpisodesList } from '../../components/Episodes/episodes.list'
import { HeaderFilm } from '../../components/Film/header.film'

import type { EpisodesRouteProp } from '../../navigation/stacks/film'

export const Episodes: FC<{ route: EpisodesRouteProp }> = ({
    route
}) => {

    const [episodes, setEpisodes] = useState([])
    const [season, setSeason] = useState('1')
    
    useEffect(() => {
        (async () => {
            try {

                const res = await axios.get(`http://www.omdbapi.com/?t=${route.params.name}&Season=1&apikey=507695cd`)
                setEpisodes(res.data.Episodes)

            } catch (err) {
                console.log(err)
            }
        })()
    }, [season])
    
    return (
        <Background>
            <HeaderFilm name={route.params.name} sub='Episodes' />
            <View style={{ marginTop: 70, padding: 20 }}>
                <EpisodesList name={route.params.name} episodes={episodes} season={season} />
            </View>
        </Background>
    )
}