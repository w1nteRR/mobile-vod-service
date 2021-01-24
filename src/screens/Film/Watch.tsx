import React, { FC } from 'react'
import { StatusBar } from 'react-native'

import { Background } from '../../components/common/utils/layout'
import { Player } from '../../components/Player/Player'

import type { WatchRouteProp } from '../../navigation/stacks/film'

export const Watch: FC<{ route: WatchRouteProp }> = ({ 
    route
 }) => {

    const { filmId, name } = route.params

    return (
        <Background>
            <StatusBar hidden /> 
            <Player name={name} />
        </Background>
    )
}