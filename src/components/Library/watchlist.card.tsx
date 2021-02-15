import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'

import { Button } from '../common/styled/buttons/buttons.shared'
import { BgImgCard } from '../common/styled/cards/cards.shared'

import { DANGER } from '../common/utils/colors'
import { Container } from '../common/utils/layout'
import { Title } from '../common/utils/typography'

interface WatchlistCard {
    name: string
    img: string
    onDelete?(): void
    onPress?(): void
}

export const WatchlistCard: FC<WatchlistCard> = ({
    name,
    img,
    onDelete,
    onPress
}) => 
    <TouchableOpacity onPress={onPress} activeOpacity={.6}>
        <Container 
            p='20px' 
            style={{ borderWidth: 0, borderColor: 'silver', borderRadius: 0 }}
            direction='column'
            m='20px 0'
        >
            <Container justify='space-between'>
                <BgImgCard img={img} h='40px' width='70px' brRadius={5} />
                <Container w='50%' direction='column' align='flex-start'>
                    <Title>{name}</Title>
                </Container>
                <Button 
                    bgColor='dark' 
                    h='40px' 
                    w='40px' 
                    brRadius='10px'
                    iconName='playlist-remove' 
                    iconSize={20} 
                    iconColor={DANGER}
                    onPress={onDelete}
                />
            </Container>
        </Container>
    </TouchableOpacity>