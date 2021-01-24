import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ModalCard } from '../../common/styled/cards/cards.shared'
import { Button } from '../../common/styled/buttons/buttons.shared'

import { TextT, Title } from '../../common/utils/typography'
import { Container } from '../../common/utils/layout'

import { RootState } from '../../../redux/rootReducer'
import { setOption } from '../../../redux/player/actions'

export const QualityModal: FC = () => {

    const dispatch = useDispatch()
    const { tracks: { video }, playback: { quality } } = useSelector((state: RootState) => state.player)

    video.sort((a, b) => b.height - a.height)

    return (
        <ModalCard right={<Title>Pick quality</Title>}>
            <Container h='220px'>
            {
                video.map(track => 
                    <Button
                        key={track.trackId} 
                        text={track.height}
                        bgColor={track.height === quality ? 'primary' : 'dark'} 
                        w='45px' 
                        h='45px' 
                        m='10px'
                        brRadius='10px'
                        textSize='10px'
                        onPress={() => dispatch(setOption('quality', track.height))}
                    />
                )
            }
            </Container>
            <Container h='50px'>
            {
                quality === 1080 && <TextT>HQ mode turned on</TextT>
            }
            </Container>
        </ModalCard>
    )
}