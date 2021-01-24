import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ModalCard } from '../../common/styled/cards/cards.shared'
import { Button } from '../../common/styled/buttons/buttons.shared'

import { Title } from '../../common/utils/typography'
import { Container } from '../../common/utils/layout'

import { RootState } from '../../../redux/rootReducer'
import { setOption } from '../../../redux/player/actions'

export const AudioModal: FC = () => {

    const dispatch = useDispatch()
    const { tracks: { audio }, playback: { language } } = useSelector((state: RootState) => state.player)

    return (
        <ModalCard right={<Title>Pick language</Title>}>
            <Container h='260px'>
            {
                audio.map(track => 
                    <Button 
                        key={track.index}
                        text={track.language}
                        bgColor={track.language === language ? 'primary' : 'dark'} 
                        w='45px' 
                        h='45px' 
                        m='10px'
                        brRadius='10px'
                        textSize='10px'
                        onPress={() => dispatch(setOption('language', track.language))}
                    />
                )
            }
            </Container>
        </ModalCard>
    )
}