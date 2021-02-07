import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../../common/styled/buttons/buttons.shared'

import { Loader } from '../../common/styled/shared/loader.shared'
import { DANGER, PRIMARY } from '../../common/utils/colors'
import { Container } from '../../common/utils/layout'

import { addToWatchlist, fetchWatchlistStatus, removeFromWatchlist } from '../../../redux/watchlist/actions'
import { RootState } from '../../../redux/rootReducer'


export const StatusControl: FC<{ filmId: string }> = ({
    filmId
}) => {

    const [loading, setLoading] = useState(true)
    
    const dispatch = useDispatch()

    const status = useSelector((state: RootState) => state.watchlist.status)

    useEffect(() => {
        let isActive = true

        const fetchStatus = async () => {
            try {
                dispatch(fetchWatchlistStatus(filmId))
                
                if(isActive) {
                    setTimeout(() => {
                        setLoading(false)
                    }, 150)
                }
            } catch (err) {
                console.log(err)
            }
        }

        fetchStatus()

        return () => {
            isActive = false
        }
    }, [])

    if(loading) return (
        <Container w='40px' h='40px' m='0 10px 0 0'>
            <Loader />
        </Container>
    )
    
    if(status === 'error') return (
        <Button 
            iconName='alert-circle'
            iconSize={15}
            iconColor={DANGER}
            {...btn}
        />
    )

    return <Button 
                iconName={status ? 'playlist-check': 'playlist-plus'}  
                iconSize={17} 
                iconColor={status ? PRIMARY: '#fff'}
                {...btn}
                onPress={() => {
                    status 
                    ?   dispatch(removeFromWatchlist(filmId))
                    :   dispatch(addToWatchlist(filmId))
                }}
        />
}

const btn = {
    h: '40px',
    w: '40px',
    brRadius: '10px',
    bgColor: 'dark',
    m: '0 10px 0 0'
}