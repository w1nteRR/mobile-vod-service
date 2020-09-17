import React, { FC } from 'react'
import { Dimensions, ScrollView } from 'react-native'
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

    const w = Dimensions.get('window').width

    return (
        <Container direction='column' h='250px' m='20px 0'>
            <Container justify='flex-start' p='30px 10px'>
                <Title>{playlist.name}</Title>
            </Container>
            <Container>
                <ScrollView horizontal>
                    {
                        playlist.films.map(item => 
                            <BgImgCard 
                                key={item._id} 
                                img={item.img} 
                                width={w - 50 + 'px'} 
                                m='10px' 
                                onPress={() => navigation.navigate('Film', {
                                    filmId: item._id
                                })}
                            />
                        )
                    }
                </ScrollView>
            </Container>
        </Container>
    )
}
