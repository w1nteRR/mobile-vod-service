import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { View } from 'react-native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'
import { Input } from '../../../components/shared/inputs'

import { AuthContext } from '../../../context'

const PlaylistCreationModal = () => {
    const navigation = useNavigation()
    const { userId } = useContext(AuthContext)

    const [text, setText] = useState('')

    const createNewPlaylist = async () => {
        try {
            const res = await axios.put('http://192.168.1.104:8000/library/playlists/create', {
                name: text,
                userId: userId
            })
                alert(res.data.message)
                navigation.goBack({
                    status: 200    
            })
        } catch (err) {
            console.log(err)
            alert('something went wrong')
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
                    placeholder='Name'
                    placeholderTextColor='silver'
                    onChangeText={text => setText(text)} 
                    autoFocus={true}
                /> 
                <SettingsBtnWrapper 
                    buttonText='create new'
                    onPress={() => createNewPlaylist()}
                />
            </View>
        </View>
    )
}

export default PlaylistCreationModal