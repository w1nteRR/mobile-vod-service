import React, { FC, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'

import { Title, Text } from '../common/utils/typography'
import { Container } from '../common/utils/layout'

import { TrendCard } from '../Trends/trend.card'
import { ScrollContainer } from '../Film/scrollviews/Scroll.container'

import { IFilmTrend } from '../../interfaces/film/IFilm'

export const Trends: FC = () => {
    
    const [trends, setTrends] = useState<Array<IFilmTrend>>([])

    useEffect(() => {
        (async () => {
            try {

                const res = await axios.get('https://feedfa.azurewebsites.net/api/GetTrends')
                setTrends(res.data)

            } catch (err) {
                console.log(err)
            }
        })()
    }, [])


    if(!trends.length) return <Title>Fetching trends...</Title>
    
    return (
        <ScrollContainer title='Trends'>
            <Container direction='column'>
                <ScrollView horizontal pagingEnabled>
                {
                    trends.slice(1).map(trend => 
                        <TrendCard key={trend._id} image={trend.wallpaper} name={trend.name} />)
                }
                </ScrollView>
            </Container>
        </ScrollContainer>
    )
}