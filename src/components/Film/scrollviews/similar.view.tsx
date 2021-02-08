import React, { memo, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'

import { BgImgCard } from '../../common/styled/cards/cards.shared'

import { ScrollContainer } from './Scroll.container'

import { similarApi } from '../../../api/similar.api'

import { IFilmShort } from '../../../interfaces/film/IFilm'

export const Similar = memo<{ tags: Array<string>, filmdId: string }>(({ 
    tags,
    filmdId 
}) => {

    const [similar, setSimilar] = useState<Array<IFilmShort>>([])

    const navigation = useNavigation()

    useEffect(() => {
        if(!tags.length) return

        const fetchSimilar = async () => {
            const films = await similarApi().tags(tags)
            const filtred = films.filter(i => i._id !== filmdId)
            
            setSimilar(filtred)            
        }

        fetchSimilar()
    }, [])

    if(!similar.length) return null

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
                            onPress={() => navigation.dispatch({
                                ...StackActions.push('Film', { filmId: film._id })
                            })} 
                        />
                    )
                }
            </ScrollView>
        </ScrollContainer> 
    )
})
