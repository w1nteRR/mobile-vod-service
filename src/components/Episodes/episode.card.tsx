import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'

import { Container } from '../common/utils/layout'
import { Title, TextT } from '../common/utils/typography'

interface IEpisodeCard {
    name: string
    imdbRating: string
    onPress?: () => void
}

export const EpisodeCard: FC<IEpisodeCard> = ({
    name,
    imdbRating,
    onPress
}) => 
    <TouchableOpacity onPress={onPress}>
        <Container 
            p='30px 20px'
            m='20px 0'
            style={{
                borderWidth: .5,
                borderColor: 'silver',
                borderRadius: 10
            }}
            justify='space-between'
        >
            <Title>{name}</Title>
            <TextT>{imdbRating}</TextT>
        </Container>  
    </TouchableOpacity>