import React, { FC } from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { Text, Title, Describe } from '../common/utils/typography'

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

    const w = Dimensions.get('window').width

    const _renderCard = (film: IFilmTrend) =>
        <Container 
            direction='column' 
            bgColor={MAIN} 
            h='400px' 
            justify='flex-start'
        >
            <BgImgCard 
                img={film.wallpaper} 
                resizeMode='cover'
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
        
    
    return <Carousel 
                data={trends} 
                renderItem={({ item }) => _renderCard(item)} 
                sliderWidth={w}
                itemWidth={w} 
                itemHeight={300}
                // autoplay={true}
                loop={true}
            />
}