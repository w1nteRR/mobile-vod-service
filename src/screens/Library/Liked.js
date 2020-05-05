import React, { useEffect, useContext, useState} from 'react'
import axios from 'axios'
import { View } from 'react-native'

import { Header, Title, Background } from '../../components/shared/screens'
import FilmCard from '../../components/Browse/FilmCard'

import { AuthContext } from '../../context'
import { ScrollView } from 'react-native-gesture-handler'

const Liked =  () => {

    const { userId, ip } = useContext(AuthContext)
    const [likedList, setLikedList] = useState([])

    useEffect(() => {
        const getLikedList = async () => {
            const res = await axios.get(`http://${ip}:8000/library/liked/${userId}`)

            setLikedList(res.data)
        } 
        getLikedList()
    }, [])

    console.log(likedList)
    return (
        <Background>
            <Header>
                <Title>Liked</Title>
            </Header>
            <ScrollView>
                {
                    likedList.map(options => (
                        <View key={options._id} style={{ margin: 5 }}>
                            <FilmCard item={options} />
                        </View>
                    ))
                }
            </ScrollView>
        </Background>
    )
}

export default Liked