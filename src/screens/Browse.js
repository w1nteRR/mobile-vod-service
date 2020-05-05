import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

import { StyleSheet, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { FlatList } from 'react-native-gesture-handler'
import FilmCard from '../components/Browse/FilmCard'

import { Wrapper, TitleContainer, SwiperContainer } from '../components/FilmSwiper/FilmSwiper.styles'
import { Background, Header, Title } from '../components/shared/screens'

import { AuthContext } from '../context'

const Browse = () => {

    const { userId, ip } = useContext(AuthContext)
    const navigation = useNavigation()

    console.log(ip)
    console.log(`http://192.168.43.87:8000/library/watch_continue/${userId}`)

    const [films, setFilms] = useState([])
    const [index, setIndex] = useState(3)
    const [filmContinue, setFilmContinue] = useState({})

    // useEffect(() => {
    //     const getFilmContinue = async () => {
    //         try {
    //             const res = await axios.get(`http://192.168.43.87:8000/library/watch_continue/${userId}`)
    //             console.log(res.data[0])
    //             setFilmContinue(res.data[0])
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     getFilmContinue()
    // }, [userId, ip])

    


    useEffect(() => {
        const getFilms = async () => {
            try {
                const res = await axios.get(`http://192.168.43.87:8000/playlist/${index}`)
                setFilms(films.concat(res.data))
                setIndex(index + 3)
            } catch (err) {
                console.log(err)
            }
        }
        getFilms()
    }, [index, ip])


    const timeConverter = (time) => {
        const minutes = time >= 60 ? Math.floor(time / 60) : 0
        const seconds = Math.floor(time - minutes * 60)
    
        return `${minutes >= 10 ? minutes : + minutes}:${
          seconds >= 10 ? seconds : '' + seconds + '0'
        }`
    }
      
    const position = timeConverter(filmContinue.time)


    const _renderItem = ({ item }) => <FilmCard item={item} onPress={() => navigation.navigate('Film', {
        itemId: item._id
    })} />

    const Row = ({ item }) => {
        return (
            <Wrapper>
                <TitleContainer>{item.playlistName}</TitleContainer>
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

    const ContinueContainer = ({ film }) => {
        return (
            <View style={{ marginTop: 20 }}>
                <TitleContainer>Continue watching</TitleContainer>
                <Title>{position}</Title>
                <View style={{  width: 340, margin: 22 }}>
                    <FilmCard item={film} onPress={() => navigation.navigate('FilmPlayer', {
                        timeContinue: film.time,
                        filmId: film._id,
                        filmImg: film.img
                    })} 
                    />
                </View>
            </View>
        )
    }

    const loadMore = () => {
        setIndex(7)
    }

    return (
        <Background>
            <Header>
                <Title fontSize='30px'>browse</Title>
            </Header>
        <FlatList 
                style={styles.list}
                data={films}
                renderItem={Row}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={loadMore}
                onEndReachedThreshold={0.01}
                initialNumToRender={3}
                
                // ListHeaderComponent={
                //     <ContinueContainer film={filmContinue} />
                // }
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