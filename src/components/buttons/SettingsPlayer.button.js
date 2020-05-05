import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'


const SettingsPlayerButton = () => {
    const navigation = useNavigation()
    return (
            <View>
                <Icon 
                    size={30} 
                    color='#fff' 
                    name='settings' 
                    onPress={() => navigation.navigate('SettingsPlayer')}
                />
            </View>
    )
}

export default SettingsPlayerButton