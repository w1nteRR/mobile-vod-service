import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { View, ScrollView, Animated, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import HiddenView from '../../components/Film/HiddenView'
import AboutContainer from '../../components/Film/ScrollContainers/AboutContainer'
import StorylineContainer from '../../components/Film/ScrollContainers/StorylineContainer'
import CastContainer from '../../components/Film/ScrollContainers/CastContainer'
import InfoContainer from '../../components/Film/ScrollContainers/InfoContainer'
import Player from '../../components/Player/Player'
import PlayButton from '../../components/buttons/Play.button'
import Header from '../../components/Film/Header'

import { AuthContext } from '../../context'

HEADER_MAX_HEIGHT = 340;
HEADER_MIN_HEIGHT = 240;

const Film = ({ route }) => {

    const [scrollY] = useState(new Animated.Value(0))
    const [film, setFilm] = useState([])
    const [state] = useState(false)
    const [watchContinue, setWatchContinue] = useState(0)

    const { userId, ip } = useContext(AuthContext)
    const navigation = useNavigation()

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
    })
    
    const size = scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: [60, 45],
        extrapolate: 'clamp'
    })
    
    const headerZindex = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
        outputRange: [0, 0, 1000],
        extrapolate: 'clamp'
    })

    useEffect(() => {
        const getFilm = async () => {
            try {
                const res = await axios.get(`http://192.168.43.87:8000/film/${route.params.itemId}`)
                setFilm(res.data.film)
            } catch (err) {
                console.log(err)
            }
        }
        getFilm()
    }, [])


    return (
        <View style={{ backgroundColor: '#171717', flex: 1 }}>
            <HiddenView 
                filmName={film.name} 
                _id={film._id}
                img={film.img} 
            />
            <Header height={headerHeight} zIndex={headerZindex}>
            {
                !state
                ?   <Image 
                        source={{uri: `http://192.168.43.87:8000${film.wallpaper || film.img}`}}
                        style={{
                            resizeMode: 'cover',
                            width: '100%',
                            height: '100%',
                            zIndex: 3
                        }}
                    /> 
                :   <Player />
            }
            </Header>
            <View style={{ height: 450, bottom: -310, backgroundColor: '#171717' }}>
                <PlayButton size={size} onPress={() => navigation.navigate('FilmPlayer',{
                    filmId: film._id,
                    filmImg: film.img
                })}
                />
                <ScrollView
                    onScroll={
                        Animated.event([
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        y: scrollY
                                    }
                                }
                            }
                        ])
                    }
                >
                    <AboutContainer 
                        genr={film.genr || []} 
                        duration={film.duration}
                        year={film.year} 
                    />
                    <StorylineContainer 
                        describe={film.describe} 
                    />
                    <CastContainer 
                        cast={film.cast} 
                    />
                    <InfoContainer 
                        director={film.director}
                        country={film.country}
                        audio={film.audio}
                        company={film.company}
                        subtitles={film.subtitles}
                        release={film.release}
                    />
                </ScrollView>
            </View>
        </View>
    );
}

export default Film
