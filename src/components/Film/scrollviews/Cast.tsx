import React, { FC } from 'react'
import { ScrollView } from 'react-native'

import { ScrollContainer } from './Scroll.container'

import { BgImgCard } from '../../common/styled/cards/cards.shared'
import { Container } from '../../common/utils/layout'
import { TextT, Text } from '../../common/utils/typography'

import { IActor } from '../../../interfaces/cast/IActor'

interface ICastProps {
    cast: Array<IActor>
}

export const Cast: FC<ICastProps> = ({ cast }) => {

    const _renderItem = (actor: IActor) => 
        <Container direction='column' h='320px' m='10px' w='390px'>
            <BgImgCard 
                img={actor.films.img}
                h='230px'
                w='200px'
            />
            <Container m='10px'>
                <Text>{actor.actorName}</Text>
            </Container>
            <TextT>{actor.films.actorRole}</TextT>
        </Container>

    return (
        <ScrollContainer title='Cast'>
            <ScrollView horizontal={true}>
                {
                    cast.map(actor => _renderItem(actor))
                }
            </ScrollView>
        </ScrollContainer>
    )
}