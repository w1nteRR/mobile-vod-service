import React from 'react'
import { Animated, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const PlayButton = ({ size, onPress }) => {
  
    return (
        <Animated.View style={{...styles.container, height: size, width: size}}>
            <TouchableOpacity onPress={onPress}>
                    <View style={styles.innerContainer}>
                        <Icon 
                            size={35} 
                            color='#fff' 
                            name='play-circle-filled' 
                        />
                    </View>
            </TouchableOpacity>
        </Animated.View>
    )
} 

const styles = StyleSheet.create({
   container: {
        position: 'absolute', 
        bottom: 60, 
        right: 25,
        zIndex: 2,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 1.5,
        opacity: .9,
        borderStyle: 'dashed'
    },
    innerContainer: {
        width: '100%', 
        height: '100%', 
        alignItems: "center", 
        justifyContent: 'center'
    }   
})

export default PlayButton