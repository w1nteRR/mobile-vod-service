import React, { useState, useEffect } from 'react'
import { Animated, Easing } from 'react-native'

export const RatingProgress = ({ value, children, color }) => {
    const [width] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(width, {
            toValue: value,
            duration: 500,
            easing: Easing.linear
        })
        .start()
    }, [value])

    return (
        <Animated.View style={{
            width: width.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%']
            }),
            height: 1,
            backgroundColor: color,
            position: 'absolute',
            left: 0,
            marginLeft: 5,
        }}>
            {children}
        </Animated.View>
    )
}