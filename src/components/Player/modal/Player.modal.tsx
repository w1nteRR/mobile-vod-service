import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { ModalCard } from '../../common/styled/cards/cards.shared'
import { Button } from '../../common/styled/buttons/buttons.shared'

import { Container } from '../../common/utils/layout'
import { TextT, Title } from '../../common/utils/typography'

import { RootState } from '../../../redux/rootReducer'


export const PlayerModal: FC = () => {
    const navigation = useNavigation()

    const { quality, language } = useSelector((state: RootState) => state.player.playback)

    const _playback = (index: number) => {
        switch(index) {
            case 0:
                return quality
            case 1:
                return language
            case 2:
                return 'sub not available'
        }
    }

    return (
       <ModalCard right={<Title>Playback settings</Title>}>
           {
               buttons.map(({ iconName, to }, index) => (
                    <Container justify='flex-start' key={index}>
                        <Button 
                            {...btnStyle}
                            iconName={iconName}
                            onPress={() => navigation.navigate(to)}
                        />
                        <TextT>{_playback(index)}</TextT>
                    </Container>
               ))
           }
       </ModalCard>
    )
}

const buttons = [
    {
        iconName: 'quality-high',
        to: 'PlayerQuality'
    },
    {
        iconName: 'web',
        to: 'PlayerAudio'
    },
    {
        iconName: 'subtitles',
        to: 'PlayerSubtitles'
    }
]

const btnStyle = {
    bgColor: 'dark',
    h: '40px',
    w: '40px',
    brRadius: '10px',
    iconSize: 15,
    m: '20px'
}