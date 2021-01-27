import { RouteProp } from '@react-navigation/native'
import React, { FC, useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { InfoList } from '../About/info.list'

import { Button } from '../common/styled/buttons/buttons.shared'
import { Title, Text, Describe } from '../common/utils/typography'
import { ScrollContainer } from '../Film/scrollviews/Scroll.container'

import { ModalCard } from '../common/styled/cards/cards.shared'
import { Container } from '../common/utils/layout'

import { omdbApi } from '../../api/omdb.api'

import { EpisodeOmdbFull } from '../../interfaces/film/IEpisode'

type EpisodeModal = {
    EpisodeModal: {
        imdbID: string
        season: string
        episode: string
        name: string
    }
}

export const EpisodeModal: FC<{ route: RouteProp<EpisodeModal, 'EpisodeModal'> }> = ({
    route
}) => {

    const { name, season } = route.params

    const [episode, setEpisode] = useState<EpisodeOmdbFull>({} as EpisodeOmdbFull)

    useEffect(() => {
        let isActive = true

        const fetchEpisode = async () => {
            
            const res = await omdbApi().episode(name, season, route.params.episode)

            try {

                if (isActive) {
                    setEpisode(res.data)
                }

            } catch (err) {
                console.log(err)
            }
        }

        fetchEpisode()

        return () => {
            isActive = false
        }

    }, [])

    const w = Dimensions.get('screen').width
    const h = Dimensions.get('screen').height - 220

    return (
        <ModalCard right={<Title>{episode.Title}</Title>}>
            <ScrollView style={{ height: h, marginBottom: 70 }}>
                <Container m='0 auto'>
                    <Image 
                        source={{ uri: episode.Poster }} 
                        style={{ height: 300, width: w }} 
                    />
                    <Container style={{ position: 'absolute', top: 0, height: 300 }}>
                    <LinearGradient
                        colors={['rgba(0, 0, 0, .2)', 'rgba(0, 0, 0, .7)', 'black']} 
                        style={{
                            flex: 1,
                            height: '100%',
                            justifyContent: 'flex-end'
                        }}
                    />
                    </Container>
                </Container>
                <Container p='20px' direction='column'>
                    <ScrollContainer title='About'>
                        <Container 
                            m='0 0 10px' 
                            p='20px' 
                            style={{ 
                                borderRadius: 10,
                                borderWidth: .8,
                                borderColor: 'silver'
                            }}
                        >
                            <Describe>{episode.Plot}</Describe>
                        </Container>
                    </ScrollContainer>
                    <ScrollContainer title='IMDb Rating'>
                        <Text 
                            size='46px' 
                            color='#fff'
                        >
                            {episode.imdbRating}
                        </Text>
                        <Text size='10px' weight='bold' color='gray'>{episode.imdbVotes}</Text>
                    </ScrollContainer>
                    <ScrollContainer title='More info'>
                        <InfoList 
                            director={episode.Director}
                            released={episode.Released}
                            runtime={episode.Runtime} 
                            episode={episode.Episode}
                            season={episode.Season}
                        />
                    </ScrollContainer>
                </Container>
            </ScrollView>
            <Container style={{ position: 'absolute', bottom: 15 }}>
                <Button 
                    text='Watch now' 
                    bgColor='primary' 
                    brRadius='10px' 
                    p='25px'
                    w={w - 30 + 'px'} 
                />
                </Container>
        </ModalCard>
        
    )
}