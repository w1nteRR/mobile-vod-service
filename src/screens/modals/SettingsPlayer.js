import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import SettingsBtnWrapper from '../../components/modals/Player/Settings.button'

const SettingsPlayer = () => {
    const navigation = useNavigation()

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
                    iconName='settings'
                    buttonText='quality'
                    onPress={() => navigation.navigate('QualityPlayer')}  
                />
                <SettingsBtnWrapper 
                    iconName='web'
                    buttonText='language'  
                    onPress={() => navigation.navigate('LanguagePlayer')}  
                />
                <SettingsBtnWrapper 
                    iconName='subtitles'
                    buttonText='subtitles'  
                    onPress={() => navigation.navigate('QualityPlayer')}  
                />                        
            </View>
        </View>
    )
}

export default SettingsPlayer