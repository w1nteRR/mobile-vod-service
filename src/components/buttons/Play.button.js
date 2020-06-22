import React from 'react'
import { Animated, StyleSheet, TouchableOpacity } from 'react-native'

import { Text } from '../styled/typography' 
import { PRIMARY } from '../styled/colors'
import { Container } from '../styled/screens'

export const PlayButton = ({ size, onPress }) => 
    <Animated.View style={{...styles.container, height: size, width: size}}>
        <TouchableOpacity onPress={onPress} style={{ zIndex: 5 }}>
                <Container 
                    w='400px' 
                    h='60px' 
                    bgColor={PRIMARY}
                >
                    <Text 
                        color='#fff'
                        weight='bold'
                        uppercase
                    >
                        Watch now
                    </Text>
                </Container>
        </TouchableOpacity>
    </Animated.View>

const styles = StyleSheet.create({
   container: {
        position: 'absolute', 
        bottom: 0, 
        zIndex: 2,
        opacity: .9
    }
})
