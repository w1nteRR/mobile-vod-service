import React, { FC } from 'react'

import { IActor } from '../../../interfaces/cast/IActor'

import { BgImgCard } from '../../common/styled/cards/cards.shared'
import { Container } from '../../common/utils/layout'
import { Text } from '../../common/utils/typography'

export const CastCard: FC<IActor> = ({
    img,
    actorName,
    actorRole
}) => {
    return (
        <Container 
            w='90%' 
            style={{ borderRadius: 10 }} 
            p='10px' 
            m='10px 0'
            justify='flex-start'
        >
            <BgImgCard img={img} width='60px' h='60px' brRadius={100} />
            <Container 
                direction='column' 
                w='50%' 
                align='flex-start' 
                h='50px' 
                justify='space-around'
            >
                <Text size='15px' color='#fff'>{actorName}</Text>
                <Text size='13px'>{actorRole}</Text>
            </Container>
        </Container>
    )
}