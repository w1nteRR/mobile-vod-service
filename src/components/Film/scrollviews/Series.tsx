import React, { FC, useState } from 'react'
import Carousel from 'react-native-snap-carousel'

import { Container } from '../../common/utils/layout'
import { EpisodeCard } from '../../common/styled/cards/cards.shared'

import { Seasons } from '../control/Seasons'
import { ScrollContainer } from './Scroll.container'

import { useFilter } from '../../../hooks/utils/useFilter'

import { IEpisode } from '../../../interfaces/film/IEpisode'

interface ISeriesProps {
    series: Array<IEpisode>
}

export const Series: FC<ISeriesProps> = ({ series }) => {

    const [season, setSeason] = useState(1)
    
    const { episodes } = useFilter(series)

    const { seasons, filtredEpisodes } = episodes(season)

    return (
        <ScrollContainer title='Series'>
            <Container m='0 0 50px'>
                <Seasons 
                    seasons={seasons} 
                    onSeasonClick={n => setSeason(n)}
                    activeSeason={season}
                 />
            </Container>
            <Carousel 
                data={filtredEpisodes}
                renderItem={({ item }) => 
                    <EpisodeCard 
                        name={item.name} 
                        img={item.img}
                        describe={item.describe}
                        onPress={() => console.log('s')}
                    />
                }
                sliderWidth={390}
                itemWidth={340}
            />
        </ScrollContainer>
    )
}