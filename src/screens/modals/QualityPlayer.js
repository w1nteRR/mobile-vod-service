import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Button } from 'react-native'

import SettingsBtnWrapper from '../../components/modals/Player/Settings.button'
import { PlayerContext } from '../../reducers/Player'


const QualityPlayer = () => {
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
                    playerState.videoTracks.map(quality => (
                        <SettingsBtnWrapper 
                            key={quality.height} 
                            buttonText={quality.height}
                            onPress={() => playerDispatch({
                                type: 'setQuality',
                                payload: quality.height
                            })}
                        />
                    ))
                }
            </View>
        </View>
    )
}

export default QualityPlayer