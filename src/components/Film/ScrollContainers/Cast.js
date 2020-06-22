import React from 'react'
import Carousel from 'react-native-snap-carousel'

import { SwiperContainer } from '../../FilmSwiper/FilmSwiper.styles'
import { Title } from '../../styled/typography'

import { CastCard } from '../Cast.card'
import { Container } from '../../styled/screens'

export const Cast = ({ cast }) => {

    const _renderItem = ({ item }) => <CastCard item={item} />

    return (
        <Container direction='column'>
            <Container
                justify='flex-start'
                p='10px'
            >
                <Title>Cast</Title>
            </Container>
            <SwiperContainer>
                <Carousel
                    data={cast}
                    renderItem={_renderItem}
                    sliderWidth={390}
                    itemWidth={260}
                />
            </SwiperContainer>
        </Container>
    )
}
