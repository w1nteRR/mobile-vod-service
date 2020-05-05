import React, { useState, useContext } from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { PlayerContext } from '../../../reducers/Player'

const Settings = () => {

    const { playerDispatch } = useContext(PlayerContext)

    const [spinAnim, setSpinAnim] = useState(new Animated.Value(0))
    
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

        const anim = () => {
            Animated.timing(
                spinAnim,
                {
                  toValue: 1,
                  duration: 500,
                  easing: Easing.linear,
                  useNativeDriver: true
                }
            ).start(() => setSpinAnim(new Animated.Value(0)))
            playerDispatch({
                type: 'toggleSettings',
                payload: 'quality'
            })
        }

    return (
        <Animated.View  style={{...styles.hidd, transform: [{rotate: spin}] }}>
            <Icon 
                size={20} 
                color="#fff" 
                name="settings" 
                onPress={anim}
                
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    hiddenContainer: {
        width: 100,
        
        backgroundColor: 'silver',
        position: 'absolute',
        bottom: 100,
    },
    hidd: {
        width: 20,
        height: 20,    
    }
})

export default Settings