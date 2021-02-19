import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Watchlist } from '../../components/Library/watchlist/watchlist'
import { ContinueWatch } from '../../components/Library/continue.watch/continue.watch'

import { NoAuth } from '../../components/common/styled/alerts/alerts.shared'
import { Background } from '../../components/common/utils/layout'

import { RootState } from '../../redux/rootReducer'

export const Library: FC = () => {
    
    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated)

    if(!isAuth) return <NoAuth />
    
    return (
        <Background>
            <ContinueWatch />
            <Watchlist />
        </Background>
    )
}
