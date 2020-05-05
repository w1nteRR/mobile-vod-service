import React, { useEffect, useContext, useState} from 'react'
import axios from 'axios'
import { View } from 'react-native'

import { Header, Title, Background } from '../../components/shared/screens'
import FilmCard from '../../components/Browse/FilmCard'

import { AuthContext } from '../../context'
import { ScrollView } from 'react-native-gesture-handler'

const Playlist = ({ route }) => {

    const { userId, ip } = useContext(AuthContext)
    const [playlist, setPlaylist] = useState([])

    console.log(route)

    useEffect(() => {
        const getPlaylist = async () => {
            const res = await axios.post(`http://${ip}:8000/library/playlist/single`, {
                userId: userId,
                playlistId: route.params.playlistId
            })

            setPlaylist(res.data)
        } 
        getPlaylist()
    }, [])

    console.log(playlist)
    return (
        <Background>
            <Header>
                <Title>{route.params.playlistName}</Title>
            </Header>
            <ScrollView>
                {
                    playlist.map(options => (
                        <View key={options._id} style={{ margin: 5 }}>
                            <FilmCard item={options} />
                        </View>
                    ))
                }
            </ScrollView> 
        </Background>
    )
}

export default Playlist