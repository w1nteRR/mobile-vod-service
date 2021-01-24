import React, { useEffect, useState, FC } from 'react'
import axios from 'axios'
import { FlatList, StatusBar } from 'react-native'

import { Background, Container } from '../components/common/utils/layout'

import { FilmsCarousel } from '../components/Home/Films.carousel'

import { IP } from '../env'
import { Text } from '../components/common/utils/typography'

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
        <>
        <Background>
            <StatusBar backgroundColor="black" /> 
            <FlatList 
                data={films}
                renderItem={item => <FilmsCarousel playlist={item.item} /> }
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => setIndex(index + 4)}
                onEndReachedThreshold={0.01}
                initialNumToRender={4}
                ListHeaderComponent={() => 
                    <Container p='20px'>
                        <Container justify='flex-start'>
                            <Text size='30px' color='#fff' weight='bold'>Hello, '</Text>
                        </Container>
                    </Container>
                }
            />       
        </Background>
        </>
    )
}
