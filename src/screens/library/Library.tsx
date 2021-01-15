import React, { FC } from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { NoAuth } from '../../components/common/styled/alerts/alerts.shared'
import { Button } from '../../components/common/styled/buttons/buttons.shared'

import { Background, Container } from '../../components/common/utils/layout'

import { ScrollContainer } from '../../components/Film/scrollviews/Scroll.container'

import { WatchlistCard } from '../../components/Library/watchlist.card'
import { WatchlistError } from '../../components/Library/watchlist.error'

import { RootState } from '../../redux/rootReducer'

export const Library: FC = () => {

    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated)

    const navigation = useNavigation()

    if(!isAuth) return <NoAuth />
    
    const cards = [0]

    const isWc = false

    return (
        <Background>
            <FlatList 
                data={cards}
                ListHeaderComponent={ 
                    isWc 
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
                    if(cards.length === 1) {
                        return <WatchlistError />
                    }
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
                        :  <WatchlistCard />
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