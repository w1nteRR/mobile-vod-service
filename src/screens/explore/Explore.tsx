import React, { FC } from 'react'

import { Background } from '../../components/common/utils/layout'

import { Trends } from '../../components/Home/Trends'

export const Explore: FC = () => {
    return (
        <Background>
            <Trends />
        </Background>
    )
}

