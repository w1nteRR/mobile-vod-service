import React, { FC, useState } from 'react'
import { Dimensions } from 'react-native'

import { Container } from '../../common/utils/layout'
import { EpisodeCard } from '../../common/styled/cards/cards.shared'

import { Seasons } from '../control/Seasons'
import { ScrollContainer } from './Scroll.container'

import { useFilter } from '../../../hooks/utils/useFilter'

import { IEpisode } from '../../../interfaces/film/IEpisode'
import { ScrollView } from 'react-native'

interface ISeriesProps {
    series: Array<IEpisode>
}

export const Series: FC<ISeriesProps> = ({ series }) => {

    const [season, setSeason] = useState(1)
    
    const { episodes } = useFilter(series)

    const { seasons, filtredEpisodes } = episodes(season)

    const w: any = Dimensions.get('window').width.toFixed()

    return (
        <ScrollContainer title='Series'>
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
                        <Container w={w + 'px'}>
                            <EpisodeCard
                                w={w - 20 + 'px'} 
                                name={episode.name} 
                                img={episode.img} 
                                describe={episode.describe}
                            />
                        </Container>
                    )
                }
            </ScrollView>
        </ScrollContainer>
    )
}