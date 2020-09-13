import React, { FC } from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { BgImgCard } from '../../common/styled/cards/cards.shared'

import { ScrollContainer } from './Scroll.container'

import { IFilmShort } from '../../../interfaces/film/IFilm'

interface ISimilarProps {
    similar: Array<IFilmShort>
}

export const Similar: FC<ISimilarProps> = ({ similar }) => {

    const navigation = useNavigation()

    const w: any = Dimensions.get('window').width.toFixed()

    return (
        <ScrollContainer title='Similar'>
            <ScrollView horizontal={true}>
                {
                    similar.map(film => 
                        <BgImgCard
                            key={film._id} 
                            m='10px' 
                            img={film.img} 
                            w={w - 20 + 'px'} 
                            h='200px'
                            onPress={() => navigation.navigate('Film', {
                                filmId: film._id
                            })} 
                        />
                    )
                }
            </ScrollView>
        </ScrollContainer> 
    )
}
