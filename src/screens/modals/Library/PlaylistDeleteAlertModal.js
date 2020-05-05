import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { View } from 'react-native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'
import { Title } from '../../../components/shared/screens'

import { AuthContext } from '../../../context'

const PlaylistDeleteAlertModal = ({ route }) => {
    const navigation = useNavigation()
    const { userId } = useContext(AuthContext)

    const deletePlaylist = async () => {
        try {
            const res = await axios.put('http://192.168.1.104:8000/library/playlists/remove', {
                playlistId: route.params.playlistId,
                userId: userId
            })

            if(res.status === 200) {
                alert(res.data.message)
                navigation.navigate('Playlists', {
                    status: 200
                })
                
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <View style={{ height: "40%" ,width: '100%', backgroundColor:"#171717", justifyContent:"flex-start"}}>
                <SettingsBtnWrapper 
                    iconName='keyboard-return'
                    onPress={() => navigation.goBack()}  
                />
                <View style={{ alignItems: 'flex-start', marginTop: 50, marginLeft: 20 }}>
                    <Title>are u sure?</Title>
                </View>           
                <SettingsBtnWrapper 
                    buttonText='delete'
                    onPress={deletePlaylist}
                />
            </View>
        </View>
    )
}

export default PlaylistDeleteAlertModal