import React, { FC } from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'

import { BgImgCard } from '../../common/styled/cards/cards.shared'

import { ScrollContainer } from './Scroll.container'

import { IFilmShort } from '../../../interfaces/film/IFilm'

interface ISimilarProps {
    similar: Array<IFilmShort>
}

export const Similar: FC<ISimilarProps> = ({ similar }) => {

    const navigation = useNavigation()

    return (
        <ScrollContainer title='Similar'>
            <Carousel
                data={similar}
                renderItem={({ item }) => 
                    <BgImgCard
                        resizeMode='contain' 
                        img={item.img}
                        w='100%'
                        h='200px' 
                        onPress={() => navigation.navigate('Film', {
                            itemId: item._id
                        })} 
                    />
                }
                sliderWidth={390}
                itemWidth={340}
            />
        </ScrollContainer> 
    )
}
