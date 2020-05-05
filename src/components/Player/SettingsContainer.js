import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { PlayerContext } from '../../reducers/Player'

const SettingsContainer = props => {

    const { playerDispatch } = useContext(PlayerContext)
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.cancelButtonPosition}>
                <Icon 
                    size={25} 
                    color="#fff" 
                    name="highlight-off" 
                    onPress={() => playerDispatch({
                        type:'toggleSettings',
                        payload: ''
                    })}
                />
            </TouchableOpacity>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    cancelButtonPosition: {
        position: 'relative',
        left: '40%',
        marginTop: 10
    }
})

export default SettingsContainer
