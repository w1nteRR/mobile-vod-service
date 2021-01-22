import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../../common/utils/layout'
import { PRIMARY } from '../../common/utils/colors'
import { Button } from '../../common/styled/buttons/buttons.shared'
import { Loader } from '../../common/styled/shared/loader.shared'

import { addToWatchlist, removeFromWatchlist, fetchWatchlistStatus } from '../../../redux/watchlist/actions'
import { RootState } from '../../../redux/rootReducer'

interface IControlProps {
    filmId: string
    isSerial: boolean
    name: string
}

export const Control: FC<IControlProps> = ({ 
    filmId,
    isSerial,
    name 
}) => {

    const [loading, setLoading] = useState(true)

    const status = useSelector((state: RootState) => state.watchlist.status)
    const dispatch = useDispatch()
    const navigation = useNavigation()
       
    useEffect(() => {
        let isActive = true

        const fetchStatus = async () => {
            try {
                dispatch(fetchWatchlistStatus(filmId))
                
                if(isActive) {
                    setTimeout(() => {
                        setLoading(false)
                    }, 300)
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

    return (
        <Container justify='space-between' w='90%' m='40px 20px'>
            <Container w='35%' justify='flex-start'>
                {
                    loading
                    ?   <Container 
                            m='0 10px 0 0' 
                            h='50px' 
                            w='50px'
                        >
                            <Loader />
                        </Container>
                    :   <Button 
                            iconName={status ? 'playlist-check': 'playlist-plus'}  
                            iconSize={25} 
                            iconColor={status ? PRIMARY: '#fff'}
                            {...btn}
                            onPress={() => {
                                status 
                                ?   dispatch(removeFromWatchlist(filmId))
                                :   dispatch(addToWatchlist(filmId))
                            }}
                        />
                }
                {
                    isSerial 
                    && 
                    <Button 
                        iconName={false ? 'heart' : 'heart-outline'} 
                        iconColor='#FD73AD' 
                        iconSize={20} 
                        {...btn}
                    />
                }
            </Container>
            <Button 
                bgColor='primary'
                iconName='play' 
                h='50px' 
                w='220px' 
                text='Watch now'
                brRadius='10px' 
                justify='space-around'
                iconSize={30}
                onPress={() => navigation.navigate('Watch', {
                    screen: 'Watch',
                    params: {
                        filmId,
                        name
                    }
                })} 
            />
        </Container>
    )
}

const btn = {
    h: '50px',
    w: '50px',
    brRadius: '10px',
    bgColor: 'dark',
    m: '0 10px 0 0'
}