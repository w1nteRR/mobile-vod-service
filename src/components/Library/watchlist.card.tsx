import React, { FC } from 'react'

import { Button } from '../common/styled/buttons/buttons.shared'

import { DANGER } from '../common/utils/colors'
import { Container } from '../common/utils/layout'
import { Title, TextT } from '../common/utils/typography'

export const WatchlistCard: FC = () => 
    <Container 
        p='20px' 
        style={{ borderWidth: 0, borderColor: 'silver', borderRadius: 0 }}
        direction='column'
        m='20px 0'
    >
        <Container justify='space-between'>
            <Container h='40px' w='70px' m='0 20px 0 0' bgColor='silver' style={{ borderRadius: 5 }}></Container>
            <Container w='50%' direction='column' align='flex-start'>
                <Title>The Irishman</Title>
            </Container>
            <Button 
                bgColor='' 
                h='40px' 
                w='40px' 
                brRadius='10px'
                iconName='playlist-remove' 
                iconSize={20} 
                iconColor={DANGER}
            />
        </Container>
    </Container>