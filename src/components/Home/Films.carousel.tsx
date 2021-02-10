import React, { FC, memo } from 'react'
import { Dimensions, ScrollView, Vibration } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { BgImgCard } from '../common/styled/cards/cards.shared'
import { Button } from '../common/styled/buttons/buttons.shared'

import { ScrollContainer } from '../Film/scrollviews/Scroll.container'

import { IPlaylist } from '../../interfaces/list/IPlaylist'

interface IFilmsCarousel {
    playlist: IPlaylist
}

export const FilmsCarousel= memo<IFilmsCarousel>(({ 
    playlist 
}) => {

    const navigation = useNavigation()

    const w = Dimensions.get('window').width

    return (
        <ScrollContainer 
            title={playlist.name} 
            right={<Button bgColor='' w='45px' h='45px' iconSize={20} iconName='chevron-right' />}
        >
            <ScrollView horizontal>
                {
                    playlist.films.map(item => 
                        <BgImgCard 
                            key={item._id} 
                            img={item.img} 
                            width={w - 50 + 'px'} 
                            m='10px' 
                            brRadius={10}
                            onPress={() => navigation.navigate('FilmRoot', {
                                screen: 'Film',
                                params: {
                                    filmId: item._id
                                }
                            })}
                        />
                    )
                }
            </ScrollView>
        </ScrollContainer>
    )
})
