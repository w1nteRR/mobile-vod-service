import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import { PlayerContext } from '../../reducers/Player'

import SettingsBtnWrapper from '../../components/modals/Player/Settings.button'

const LanguagePlayer = () => {
    const navigation = useNavigation()
    const { playerState, playerDispatch } = useContext(PlayerContext)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <View style={{ height: "40%" ,width: '100%', backgroundColor:"#171717", justifyContent:"center"}}>
                <SettingsBtnWrapper 
                    iconName='keyboard-return'
                    onPress={() => navigation.goBack()}  
                />            
                {
                playerState.audioTracks.map(audio => (
                    <SettingsBtnWrapper 
                        key={audio.language} 
                        buttonText={audio.language}
                        onPress={() => playerDispatch({
                            type: 'setLanguage',
                            payload: audio.language
                        })}  
                    />
                ))
                }
            </View>
        </View>
    )
}

export default LanguagePlayer