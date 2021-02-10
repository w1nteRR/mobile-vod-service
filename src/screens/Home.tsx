import React, { useEffect, useState, FC, useCallback } from 'react'
import { FlatList, StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Background } from '../components/common/utils/layout'
import { FilmsCarousel } from '../components/Home/films.carousel'
import { UserIntro } from '../components/Home/user.intro'

import { fetchPlaylists } from '../redux/playlists/actions'
import { RootState } from '../redux/rootReducer'

export const Home: FC = () => {
    const [index, setIndex] = useState(0)

    const dispatch = useDispatch()
    const { playlists } = useSelector((state: RootState) => state.playlists)
  
    useEffect(() => { dispatch(fetchPlaylists(index)) }, [index])

    return (
        <>
        <StatusBar backgroundColor="black" translucent /> 
        <Background>
            <FlatList 
                data={playlists}
                renderItem={item => <FilmsCarousel playlist={item.item} /> }
                keyExtractor={(_, index) => index.toString()}
                onEndReached={useCallback(() => { setIndex(index + 4) }, [])}
                onEndReachedThreshold={0.01}
                initialNumToRender={4}
                ListHeaderComponent={<UserIntro />}
            />       
        </Background>
        </>
    )
}
