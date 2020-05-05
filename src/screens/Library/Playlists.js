import React, { useEffect, useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

import { Header, Title, Background } from '../../components/shared/screens'
import BottomCircleBtn from '../../components/buttons/BottomCircle.button'
import SettingsBtnWrapper from '../../components/modals/Player/Settings.button'

import { AuthContext } from '../../context'
import { View, ScrollView } from 'react-native'

const Playlists = ({ route }) => {
    const navigation = useNavigation()
    const { userId, ip } = useContext(AuthContext)
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        const getPlaylists = async () => {
            const res = await axios.get(`http://${ip}:8000/library/playlists/${userId}`)
            setPlaylists(res.data)
        }
        getPlaylists()
    }, [route.params, ip])

    return (
        <Background>
            <Header>
                <Title>Playlists</Title>
            </Header>
            <BottomCircleBtn 
                iconName='plus-circle'
                onPress={() => navigation.navigate('PlaylistCreationModal')}
            />
            <View style={{ height: '80%', top: 100}}>
                <ScrollView>
                {
                    playlists.map(playlist => (
                        <View
                            key={playlist.id} 
                            style={{
                                margin: 10, 
                                height: 100,
                                display: 'flex', 
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <View>
                                <SettingsBtnWrapper 
                                    buttonText={playlist.playlistName}
                                    onPress={() => navigation.navigate('Playlist', {
                                        playlistId: playlist.id,
                                        playlistName: playlist.playlistName
                                    })} 
                                />
                            </View>
                            <View>
                                <SettingsBtnWrapper 
                                    iconName='dots-vertical'
                                    onPress={() => navigation.navigate('PlaylistManageModal', {
                                        playlistId: playlist.id,
                                        playlistName: playlist.playlistName
                                    })} 
                                />
                            </View>
                        </View>
                    ))
                }
                </ScrollView>
            </View>
        </Background>
    )
}

export default Playlists