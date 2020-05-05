import React from 'react'
import { Animated, StyleSheet } from 'react-native'

const Header = ({ height, zIndex, children }) => {
    return (
        <Animated.View style={{
            ...styles.container, 
            height: height, 
            zIndex: zIndex, 
            elevation: zIndex
            }}
        >
            {children}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#171717',
        alignItems: 'center'
    }
})

export default Header