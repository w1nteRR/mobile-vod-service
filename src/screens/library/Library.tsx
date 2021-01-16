import React, { FC, useCallback } from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { NoAuth } from '../../components/common/styled/alerts/alerts.shared'
import { Button } from '../../components/common/styled/buttons/buttons.shared'
import { Loader } from '../../components/common/styled/shared/loader.shared'
import { Background, Container } from '../../components/common/utils/layout'

import { ScrollContainer } from '../../components/Film/scrollviews/Scroll.container'
import { WatchlistCard } from '../../components/Library/watchlist.card'
import { WatchlistError } from '../../components/Library/watchlist.error'

import { RootState } from '../../redux/rootReducer'

import { fetchWatchlist, removeFromWatchlist } from '../../redux/watchlist/actions'

export const Library: FC = () => {
    
    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated)
    const { watchlist } = useSelector((state: RootState) => state.watchlist)

    const dispatch = useDispatch()
    const navigation = useNavigation()

    useFocusEffect(
        useCallback(() => {
            let isActive = true

            const fetchlist = async () => {
                if(isActive) {
                    dispatch(fetchWatchlist())
                }
            }

            fetchlist()
            
            return () => {
                isActive = false
            }

        }, []))


    if(!isAuth) return <NoAuth />
    if(!watchlist.length) return <Container bgColor='black' h='100%'><Loader /></Container>
    
    return (
        <Background>
            <FlatList 
                data={watchlist}
                ListHeaderComponent={ 
                    true 
                    ?
                    <ScrollContainer 
                        title='Continue watching' 
                        right={
                            <Button 
                                {...btn} 
                                bgColor='' 
                                iconName='chevron-right' 
                            />
                        }
                    >
                        <Container w='350px' h='180px' bgColor='silver' style={{ borderRadius: 10 }}></Container>
                    </ScrollContainer>
                    :
                    <></>
                }
                stickyHeaderIndices={[1]}
                renderItem={item => {
                    if(watchlist.length === 1) return <WatchlistError />
                    return (
                        
                        item.index === 0
                        ?   <ScrollContainer 
                                title='Your watchlist' 
                                right={ 
                                    <Button 
                                        {...btn}
                                        bgColor=''  
                                        iconName='tune' 
                                    />
                                } 
                            /> 
                        :  
                        <WatchlistCard 
                            name={item.item.name!} 
                            img={item.item.img}
                            onDelete={() => dispatch(removeFromWatchlist(item.item._id))} 
                            onPress={() => navigation.navigate('Film', {
                                screen: 'Film',
                                params: {
                                    filmId: item.item._id
                                }
                            })}
                        />
                    )
                }}
                keyExtractor={(_, index) => index.toString()}
                onEndReached={() => console.log('s')}
                onEndReachedThreshold={0.01}
                initialNumToRender={4}
                style={{
                    height: 600
                }}
            />
            
        </Background>
    )
}

const btn = {
    w: '40px',
    h:'40px',
    iconSize: 20,
    brRadius: '10px'
}