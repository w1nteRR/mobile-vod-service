import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { AuthContext } from '../../../context'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'

const LibraryModal = ({ route }) => {
    console.log(route)
    const navigation = useNavigation()
    const { userId } = useContext(AuthContext)
    const [isLiked, setIsLiked] = useState()

    useEffect(() => {
        const getLikedList = async () => {
            const res = await axios.post(`http://192.168.1.104:8000/library/like_status`, {
                filmId: route.params.filmId,
                userId: userId  
            })

            setIsLiked(res.data)
        } 
        getLikedList()
    }, [])

    const addToLiked = async () => {
        try {
            const res = await axios.put(`http://192.168.1.104:8000/library/liked/add`, {
                filmId: route.params.filmId,
                userId: userId 
            })

            if(res.status === 200) {
                setIsLiked(true)
            }

        } catch (err) {
            console.log(err)
        }
        
    }

    const removeFromLiked = async () => {
        try {
            const res = await axios.put(`http://192.168.1.104:8000/library/liked/remove`, {
            filmId: route.params.filmId,
            userId: userId 
        })

            if(res.status === 200) {
                setIsLiked(false)
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <View style={{ 
                    height: '40%',
                    width: '100%', 
                    backgroundColor:"#202020", 
                    justifyContent:"center"
                }}>
                <SettingsBtnWrapper 
                    iconName='arrow-left'
                    onPress={() => navigation.goBack()}  
                />                 
                <SettingsBtnWrapper 
                    iconName={
                        isLiked 
                        ?   'thumb-up' 
                        :   'thumb-up-outline'
                    }
                    buttonText={
                        isLiked 
                        ?   'undo' 
                        :   'like'
                    }
                    onPress={
                        () => isLiked 
                        ?   removeFromLiked() 
                        :   addToLiked()
                    }  
                />
                <SettingsBtnWrapper 
                    iconName='history'
                    buttonText='add to watch later'  
                />
                 <SettingsBtnWrapper 
                    iconName='playlist-plus'
                    buttonText='add to playlist'  
                    onPress={() => navigation.navigate('PlaylistModal', {
                        filmId: route.params.filmId,
                        filmImg: route.params.filmImg
                    })}  
                />                     
            </View>
        </View>
    )
}

export default LibraryModal