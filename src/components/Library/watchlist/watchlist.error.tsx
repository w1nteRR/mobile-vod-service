import React, { FC } from 'react'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'

import { MAIN } from '../../common/utils/colors'
import { Container } from '../../common/utils/layout'
import { TextT } from '../../common/utils/typography'

export const WatchlistError: FC = () =>
    <Container 
        p='30px' 
        m='100px auto'
        w='90%'
        direction='column'
    >
        <Icon name='playlist-plus' size={50} color={MAIN} />
        <Container m='20px 0 0'>
            <TextT>just tap the watchlist icon to keep track</TextT>
        </Container>
    </Container>
    