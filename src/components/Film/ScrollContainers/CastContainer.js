import React from 'react'
import Carousel from 'react-native-snap-carousel'

import { ScrollViewContainer } from '../Film.styles'
import { TitleContainer, SwiperContainer } from '../../FilmSwiper/FilmSwiper.styles'

import CastCard from '../CastCard'

const CastContainer = ({ cast }) => {

    const _renderItem = ({ item }) => <CastCard item={item} />

    return (
        <ScrollViewContainer>
            <TitleContainer>cast</TitleContainer>
            <SwiperContainer>
                <Carousel
                    data={cast}
                    renderItem={_renderItem}
                    sliderWidth={390}
                    itemWidth={260}
                />
            </SwiperContainer>
        </ScrollViewContainer>
    )
}

export default CastContainer
