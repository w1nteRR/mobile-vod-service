import React, { FC } from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../common/utils/layout'
import { Title } from '../common/utils/typography'

import { BgImgCard } from '../common/styled/cards/cards.shared'

import { IPlaylist } from '../../interfaces/list/IPlaylist'

interface IFilmsCarousel {
    playlist: IPlaylist
}

export const FilmsCarousel: FC<IFilmsCarousel> = ({ playlist }) => {

    const navigation = useNavigation()

    return (
        <Container direction='column' h='250px' m='20px 0'>
            <Container justify='flex-start' p='30px 10px'>
                <Title>{playlist.name}</Title>
            </Container>
            <Container>
                <Carousel
                    data={playlist.films}
                    renderItem={({ item }) => 
                        <BgImgCard
                            resizeMode='contain' 
                            img={item.img} 
                            onPress={() => navigation.navigate('Film', {
                                filmId: item._id
                            })} 
                        />
                    }
                    sliderWidth={390}
                    itemWidth={340}
                />
            </Container>
        </Container>
    )
}
