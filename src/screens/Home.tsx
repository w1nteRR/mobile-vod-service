import React, { useEffect, useState, FC } from 'react'
import axios from 'axios'
import { FlatList, Image } from 'react-native'

import { Background } from '../components/common/utils/layout'

import { FilmsCarousel } from '../components/Home/Films.carousel'
import { Trends } from '../components/Home/Trends'

import { IP } from '../env'
import { Text } from '../components/common/utils/typography'

export const Home: FC = () => {

    const [films, setFilms] = useState([])
    const [trends, setTrends] = useState([])
    const [index, setIndex] = useState(4)

    // useEffect(() => {
    //     (async () => {
    //         try {

    //             const res = await axios.get('https://feedfa.azurewebsites.net/api/GetTrends')
    //             setTrends(res.data)

    //         } catch (err) {
    //             console.log(err)
    //         }
    //     })()
    // }, [])

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
                data={films}
                renderItem={item => <FilmsCarousel playlist={item.item} /> }
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => setIndex(index + 4)}
                onEndReachedThreshold={0.01}
                initialNumToRender={4}
                // ListHeaderComponent={() => <Trends trends={trends} />}
            />       
        </Background>
    )
}
