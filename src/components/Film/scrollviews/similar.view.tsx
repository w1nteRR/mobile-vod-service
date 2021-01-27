import React, { memo } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { BgImgCard } from '../../common/styled/cards/cards.shared'

import { ScrollContainer } from './Scroll.container'

import { IFilmShort } from '../../../interfaces/film/IFilm'

interface ISimilarProps {
    similar: Array<IFilmShort>
}

export const Similar = memo<ISimilarProps>(({ 
    similar 
}) => {

    const navigation = useNavigation()

    return (
        <ScrollContainer title='Similar'>
            <ScrollView horizontal={true}>
                {
                    similar.map(film => 
                        <BgImgCard
                            key={film._id} 
                            m='10px' 
                            img={film.img} 
                            brRadius={10}
                            onPress={() => navigation.navigate('Film', { filmId: film._id })} 
                        />
                    )
                }
            </ScrollView>
        </ScrollContainer> 
    )
})
