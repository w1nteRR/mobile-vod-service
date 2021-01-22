import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'

import { ModalCard } from '../../common/styled/cards/cards.shared'

import { Button } from '../../common/styled/buttons/buttons.shared'
import { Container } from '../../common/utils/layout'
import { TextT } from '../../common/utils/typography'


export const PlayerModal: FC = () => {
    const navigation = useNavigation()

    return (
       <ModalCard>
           {
               buttons.map(({ iconName, to }, index) => (
                    <Container justify='flex-start' key={index}>
                        <Button 
                            {...btnStyle}
                            iconName={iconName}
                            onPress={() => navigation.navigate(to)}
                        />
                        <TextT>value</TextT>
                    </Container>
               ))
           }
       </ModalCard>
    )
}

const buttons = [
    {
        iconName: 'quality-high',
        to: 'PlayerModaQuality'
    },
    {
        iconName: 'web',
        to: 'PlayerModaLanguage'
    },
    {
        iconName: 'subtitles',
        to: 'PlayerModaSubtitles'
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