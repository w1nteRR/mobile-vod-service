import React, { useEffect, useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView } from 'react-native'
import axios from 'axios'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'

import { AuthContext } from '../../../context'

const PlaylistModal = ({ route }) => {
    const navigation = useNavigation()
    const { userId } = useContext(AuthContext)
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        const getPlaylists = async () => {
            const res = await axios.get(`http://192.168.1.104:8000/library/playlists/${userId}`)
            setPlaylists(res.data)
        }
        getPlaylists()
    }, [])

    const addToPlaylist = async (playlistId) => {
        try {
            const res = await axios.put('http://192.168.1.104:8000/library/playlists/add', {
                playlistId: playlistId,
                userId: userId,
                filmId: route.params.filmId,
                filmImg: route.params.filmImg
            })
            if(res.status === 200) {
                alert('Film has been added')
            }

        } catch (err) {
            console.log(err)
            alert('Film alredy in playlist')

        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <View style={{ height: "70%" ,width: '100%', backgroundColor:"#171717", justifyContent:"flex-start"}}>
                <SettingsBtnWrapper 
                    iconName='keyboard-return'
                    onPress={() => navigation.goBack()}  
                />            
                    <SettingsBtnWrapper 
                        buttonText='create new'
                        iconName='plus'
                        onPress={() => navigation.navigate('PlaylistCreationModal')} 
                    />
                    <View style={{ height: '50%' }}>
                        <ScrollView>
                            {
                                playlists.map(playlist => (
                                    <View>
                                        <SettingsBtnWrapper
                                            key={playlist.id}
                                            buttonText={playlist.playlistName} 
                                            onPress={() => addToPlaylist(playlist.id)}
                                        />
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
            </View>
        </View>
    )
}

export default PlaylistModal