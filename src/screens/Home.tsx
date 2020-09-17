import React, { useEffect, useState, FC } from 'react'
import axios from 'axios'
import { FlatList } from 'react-native'

import { Background } from '../components/common/utils/layout'

import { FilmsCarousel } from '../components/Home/Films.carousel'
import { Trends } from '../components/Home/Trends'

import { IP } from '../env'

export const Home: FC = () => {

    const [films, setFilms] = useState([])
    const [index, setIndex] = useState(4)

    useEffect(() => {
        const getFilms = async () => {
            try {
                const res = await axios.get(`${IP}/api/video/playlists/${index}`)
                setFilms(films.concat(res.data))
            } catch (err) {
                console.log(err)
            }
        }
        getFilms()
    }, [index])

    return (
        <Background>
            <FlatList 
                onScroll={event => console.log(event.nativeEvent.contentOffset.y)}
                data={films}
                renderItem={item => <FilmsCarousel playlist={item.item} />}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => setIndex(index + 4)}
                onEndReachedThreshold={0.01}
                initialNumToRender={4}

                ListHeaderComponent={() => <Trends />}
            />       
        </Background>
    )
}
