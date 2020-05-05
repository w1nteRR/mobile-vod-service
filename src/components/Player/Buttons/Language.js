import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View } from 'react-native'

import { PlayerContext } from '../../../reducers/Player'


const Language = () => {

    const { playerDispatch } = useContext(PlayerContext)

    return (
        <View>
            <Icon 
                size={24} 
                color="#fff" 
                name="language" 
                onPress={() => playerDispatch({
                    type:'toggleSettings',
                    payload: 'language'
                })}
            />
        </View>
    )
}

export default Language