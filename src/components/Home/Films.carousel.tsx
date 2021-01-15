import React, { FC } from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../common/utils/layout'
import { Title } from '../common/utils/typography'

import { BgImgCard } from '../common/styled/cards/cards.shared'

import { IPlaylist } from '../../interfaces/list/IPlaylist'
import { ScrollContainer } from '../Film/scrollviews/Scroll.container'
import { Button } from '../common/styled/buttons/buttons.shared'

interface IFilmsCarousel {
    playlist: IPlaylist
}

export const FilmsCarousel: FC<IFilmsCarousel> = ({ playlist }) => {

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
                            onPress={() => navigation.navigate('Film', {
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
}
