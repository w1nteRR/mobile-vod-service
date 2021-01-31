import React, { useState, memo } from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../../common/utils/layout'
import { EpisodeCard } from '../../common/styled/cards/cards.shared'
import { Button } from '../../common/styled/buttons/buttons.shared'

import { Seasons } from '../control/seasons.control'
import { ScrollContainer } from './Scroll.container'

import { useFilter } from '../../../hooks/utils/useFilter'

import { IEpisode } from '../../../interfaces/film/IEpisode'

interface ISeriesProps {
    series: Array<IEpisode>
    name: string
}

const { width } = Dimensions.get('screen')

export const Series = memo<ISeriesProps>(({ 
    series,
    name 
}) => {

    const [season, setSeason] = useState(1)
    
    const { episodes } = useFilter(series)
    const navigation = useNavigation()

    const { seasons, filtredEpisodes } = episodes(season)

    return (
        <ScrollContainer 
            title='Series' 
            right={
                <Button 
                    bgColor='' 
                    iconName='chevron-right'
                    iconSize={20}
                    w='40px' 
                    h='40px' 
                    onPress={() => navigation.navigate('Episodes', { name })} 
                />
            }
        >
            <Container m='0 0 50px'>
                <Seasons 
                    seasons={seasons} 
                    onSeasonClick={n => setSeason(n)}
                    activeSeason={season}
                 />
            </Container>
            <ScrollView horizontal={true}>
                {
                    filtredEpisodes.map(episode => 
                        <EpisodeCard
                            key={episode._id}
                            w={width - 20 + 'px'} 
                            name={episode.name} 
                            img={episode.img} 
                            describe={episode.describe}
                            duration={episode.duration}
                            onPress={() => navigation.navigate('EpisodeModal', {
                                name,
                                episode: episode.number,
                                season
                            })}
                        />
                    )
                }
            </ScrollView>
        </ScrollContainer>
    )
})