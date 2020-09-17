import React, { FC } from 'react'
import { ScrollView } from 'react-native'

import { Text, Title } from '../common/utils/typography'

import { FilmDetails } from '../common/styled/cards/cards.shared'
import { Container } from '../common/utils/layout'

import { useAxios } from '../../hooks/useAxios'

import { IFilmTrend } from '../../interfaces/film/IFilm'

export const Trends: FC = () => {
    
    const { res, loading } = useAxios(`/api/video/playlist/trends`, {
        method: 'GET'
    })

    if(loading) return (
        <Container h='400px'>
            <Text>Loading</Text>
        </Container>
    )

    const trends: Array<IFilmTrend> = res?.data
    
    return (
        <>
        <Container 
            p='20px' 
            justify='flex-start'
        >
            <Title>Trends</Title>
        </Container>
        <ScrollView horizontal={true}>
            {
                trends.map(trend => 
                    <FilmDetails 
                        key={trend._id}
                        name={trend.name} 
                        img={trend.wallpaper} 
                        describe={trend.describe} 
                        h='160px' 
                    />
                )
            }
        </ScrollView>
        </>
    )
}