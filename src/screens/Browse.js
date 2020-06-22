import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { FlatList } from 'react-native-gesture-handler'

import FilmCard from '../components/Browse/FilmCard'
import { Header } from '../components/shared/Header'

import { Wrapper, TitleContainer, SwiperContainer } from '../components/FilmSwiper/FilmSwiper.styles'
import { Background } from '../components/styled/screens'

import { IP } from '../env'

const Browse = () => {

    const navigation = useNavigation()

    const [films, setFilms] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const getFilms = async () => {
            try {
                const res = await axios.get(`${IP}/video/playlists/${index}`)
                setFilms(films.concat(res.data))
            } catch (err) {
                console.log(err)
            }
        }
        getFilms()
    }, [index])


    const _renderItem = ({ item }) => 
        <FilmCard 
            item={item} 
            onPress={() => navigation.navigate('Film', {
                itemId: item._id
            })} 
        />

    const Row = ({ item }) => {
        return (
            <Wrapper>
                <TitleContainer>{item.name}</TitleContainer>
                <SwiperContainer>
                    <Carousel
                        data={item.films}
                        renderItem={_renderItem}
                        sliderWidth={390}
                        itemWidth={340}
                    />
                </SwiperContainer>
            </Wrapper>
        )
    }

    return (
        <Background>
            <Header title='Browse' />
               
        <FlatList 
            style={styles.list}
            data={films}
            renderItem={Row}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => setIndex(4)}
            onEndReachedThreshold={0.01}
            initialNumToRender={3}
        />        
    </Background>
    )
}

const styles = StyleSheet.create({
    list: {
        marginTop: 20
    },
    row: {
        width: '80%',
        backgroundColor: 'green',
        height: 200,
    }    
})

export default Browse