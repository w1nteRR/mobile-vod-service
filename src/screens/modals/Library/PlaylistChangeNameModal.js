import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { View } from 'react-native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'
import { Input } from '../../../components/shared/inputs'

import { AuthContext } from '../../../context'

const PlaylistCreationModal = ({ route }) => {
    const navigation = useNavigation()
    const { userId } = useContext(AuthContext)

    const [text, setText] = useState('')

    const changePlaylistName = async () => {
        try {
            const res = await axios.put('http://192.168.1.104:8000/library/playlists/edit', {
                name: text,
                userId: userId,
                playlistId: route.params.playlistId
            })
            if(res.status === 200) {
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
            <View style={{ height: "80%" ,width: '100%', backgroundColor:"#171717", justifyContent:"flex-start"}}>
                <SettingsBtnWrapper 
                    iconName='keyboard-return'
                    onPress={() => navigation.goBack()}  
                />           
                <Input 
                    placeholder={route.params.playlistName}
                    placeholderTextColor='silver'
                    onChangeText={text => setText(text)} 
                    autoFocus={true}
                /> 
                <SettingsBtnWrapper 
                    buttonText='update'
                    onPress={changePlaylistName}
                />
            </View>
        </View>
    )
}

export default PlaylistCreationModal