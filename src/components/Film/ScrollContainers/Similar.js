import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../../styled/screens'
import { Title } from '../../styled/typography'

import { SwiperContainer } from '../../FilmSwiper/FilmSwiper.styles'
import FilmCard from '../../Browse/FilmCard'

export const Similar = ({ similar }) => {

    const navigation = useNavigation()

    const _renderItem = ({ item }) => 
        <FilmCard 
            item={item}
            onPress={() => navigation.navigate('Film', {
                itemId: item._id
            })} 
        />

    return (
        <Container direction='column'>
            <Container
                justify='flex-start'
                p='10px'
            >
                <Title>Similar</Title>
            </Container>
            <SwiperContainer>
                <Carousel
                    data={similar}
                    renderItem={_renderItem}
                    sliderWidth={390}
                    itemWidth={340}
                />
            </SwiperContainer>
        </Container>
    )
}