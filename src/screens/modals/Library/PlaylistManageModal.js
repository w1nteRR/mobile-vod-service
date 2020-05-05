import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'

const PlaylistManageModal = ({ route }) => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <View style={{ height: "40%" ,width: '100%', backgroundColor:"#171717", justifyContent:"flex-start"}}>
                <SettingsBtnWrapper 
                    iconName='keyboard-return'
                    onPress={() => navigation.goBack()}  
                />            
                <SettingsBtnWrapper 
                    buttonText='change name'
                    iconName='pencil'
                    onPress={() => navigation.navigate('PlaylistChangeNameModal', {
                        playlistName: route.params.playlistName,
                        playlistId: route.params.playlistId
                    })} 
                />
                <SettingsBtnWrapper 
                    buttonText='share'
                    iconName='share-variant'
                />
                <SettingsBtnWrapper 
                    buttonText='delete'
                    iconName='delete'
                    onPress={() => navigation.navigate('PlaylistDeleteAlertModal', {
                        playlistId: route.params.playlistId
                    })} 
                />
            </View>
        </View>
    )
}

export default PlaylistManageModal