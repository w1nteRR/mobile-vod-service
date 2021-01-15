import React, { FC } from 'react'
import { Button } from '../../common/styled/buttons/buttons.shared'

import { Container } from '../../common/utils/layout'
import { TextT } from '../../common/utils/typography'

interface ISeasonsProps {
    seasons: Array<number>
    onSeasonClick: (n: number) => void
    activeSeason?: number
}

export const Seasons: FC<ISeasonsProps> = ({ 
    seasons, 
    onSeasonClick, 
    activeSeason 
}) =>     
    <Container justify='space-between' p='0 20px'>
        <TextT>Seasons</TextT>
        <Container w='70%' justify='flex-end'>
        {
            seasons.map((season, index) => 
                <Button
                    onPress={() => onSeasonClick(season)} 
                    key={index} 
                    text={season}
                    bgColor={activeSeason === season ? 'dark' : ''}
                    w='35px'
                    h='35px'
                    m='5px'
                    brRadius='10px'
                />
            )
        }
        </Container>
    </Container> 
        
 
    