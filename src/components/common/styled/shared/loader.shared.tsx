import React, { useEffect, useState } from 'react'
import { Easing, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { PRIMARY } from '../../utils/colors'
import { Container } from '../../utils/layout'

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

export const Loader = () => {

    const [left] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.loop(Animated.timing(left,
            {
              toValue: 1,
              duration: 350,
              easing: Easing.linear,
              useNativeDriver: true 
            }
          )).start()

        //   return () => {
        //       console.log('unmount')
        //   }
    }, [])

    const spin = left.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    
    return <AnimatedIcon 
            size={15} 
            name='loading' 
            color={PRIMARY} 
            style={{transform: [{rotate: spin}]}}
        />
}
