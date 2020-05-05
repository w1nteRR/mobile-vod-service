import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const BottomCircleBtn = ({ onPress, iconName }) => {  
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Icon 
                        size={45} 
                        color='#fff' 
                        name={iconName} 
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({
    wrapper: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 50,
        right: 40,
        zIndex: 2
    },
    innerContainer: {
        width: '100%', 
        height: '100%', 
        alignItems: "center", 
        justifyContent: 'center'
    }   
})

export default BottomCircleBtn