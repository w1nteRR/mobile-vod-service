import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { Text, Image } from 'react-native'

import FilmCard from '../Browse/FilmCard'

import { Wrapper, TitleContainer, SwiperContainer } from './FilmSwiper.styles'

const FilmSwiper = ({ films }) => {    


    console.log(films)
    const _renderItem = ({item, index}) => {
        return (
            <FilmCard name={item.name}>
                <Image 
                    source={{uri: `http://192.168.1.104:8000${item.img}`}}
                    style={{
                        resizeMode: 'cover',
                        width: '100%',
                        height: '100%',
                        borderRadius: 3
                    }} 
                />
            </FilmCard>
        )
    }

    return (
        <Wrapper>
            <TitleContainer>{films.playlistName}</TitleContainer>
            <SwiperContainer>
                <Carousel
                    data={films.films}
                    renderItem={_renderItem}
                    sliderWidth={400}
                    itemWidth={300}
                />
            </SwiperContainer>
        </Wrapper>
    )
}

export default FilmSwiper