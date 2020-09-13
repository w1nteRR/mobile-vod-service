import React, { FC } from 'react'

import { Background } from '../../components/common/utils/layout'
import { Player } from '../../components/Player/Player'

export const FilmWatch: FC = () => {
    return (
        <Background>
            <Player />
        </Background>
    )
}