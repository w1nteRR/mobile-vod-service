import React, { FC } from 'react'
import { Dimensions, ScrollView } from 'react-native'

import { Text, Title, Describe, TextT } from '../common/utils/typography'

import { BgImgCard } from '../common/styled/cards/cards.shared'
import { Container } from '../common/utils/layout'

import { useAxios } from '../../hooks/useAxios'

import { IFilmTrend } from '../../interfaces/film/IFilm'
import { MAIN } from '../common/utils/colors'

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

    const w = Dimensions.get('window').width - 20

    const _renderCard = (film: IFilmTrend) =>
        <Container 
            direction='column' 
            bgColor={MAIN} 
            h='380px'
            m='10px'
            w={w + 'px'} 
            justify='flex-start'
            style={{ borderRadius: 10 }}
        >
            <BgImgCard 
                img={film.wallpaper} 
                h='200px' 
                w={w + 'px'} 
            />
            <Container 
                w='90%' 
                m='20px' 
                justify='flex-start'
            >
                <Title>
                    {film.name}
                </Title>
            </Container>
            <Container w='90%'>
                <Describe>
                    {film.describe}
                </Describe>
            </Container>
        </Container>
    
    return (
        <>
        <Container 
            p='20px' 
            justify='flex-start'
        >
            <TextT>Trends</TextT>
        </Container>
        <ScrollView horizontal={true}>
            {
                trends.map(trend => _renderCard(trend))
            }
        </ScrollView>
        </>
    )
}