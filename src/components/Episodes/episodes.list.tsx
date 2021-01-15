import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { FlatList } from 'react-native'
import { IEpisodeShort } from '../../interfaces/film/IEpisode'

import { Button } from '../common/styled/buttons/buttons.shared'
import { Container } from '../common/utils/layout'
import { TextT } from '../common/utils/typography'

import { EpisodeCard } from './episode.card'

interface IOmdbEpisodeShort {
    Released: string
    Title: string
    imdbID: string
    imdbRating: string
    Episode: string
}

interface IEpisodeList {
    episodes: Array<IOmdbEpisodeShort>
    season: string
    name: string
}

export const EpisodesList: FC<IEpisodeList> = ({
    episodes,
    season,
    name
}) => {


    const navigation = useNavigation()

    return (
        <FlatList 
            data={episodes} 
            renderItem={item => 
                <EpisodeCard 
                    name={item.item.Title} 
                    imdbRating={item.item.imdbRating} 
                    onPress={() => navigation.navigate('EpisodeModal', {
                        season,
                        name,
                        episode: item.item.Episode
                    })}
                /> 
            } 
            keyExtractor={(item, index) => index.toString()}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={() => 
                <Container bgColor='black' justify='space-between' p='20px'>
                    <TextT>Season {season}</TextT>
                    <Button 
                        bgColor='dark' 
                        iconName='tune'
                        w='40px'
                        h='40px' 
                        brRadius='10px'
                        iconSize={15}
                    />
                </Container>
            }
        />
    )
}