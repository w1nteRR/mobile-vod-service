import React from 'react'
import Slider from '@react-native-community/slider'
import { Text, StyleSheet, View } from 'react-native'

const Progress = ({ currentTime, duration, onSeek }) => {
    
    const timeConverter = (time) => {
        const minutes = time >= 60 ? Math.floor(time / 60) : 0
        const seconds = Math.floor(time - minutes * 60)
    
        return `${minutes >= 10 ? minutes : + minutes}:${
          seconds >= 10 ? seconds : '' + seconds + '0'
        }`
    }
      
    const position = timeConverter(currentTime)
    const fullDuration = timeConverter(duration)

    return (
        <>
        <View style={styles.durationContainer}>
            <Text style={styles.currentPosition}>
                {position}
            </Text>
            <Text style={styles.fullDuration}>
                / {fullDuration}
            </Text>
        </View>
        <Slider
            style={{width: '100%', height: '50%'}}
            maximumValue={duration}
            value={currentTime}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#fff"
            onValueChange={onSeek}
        />
       </>
    )
}

const styles = StyleSheet.create({
    durationContainer: {
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentPosition: {
        color: '#fff',
        fontSize: 10,
        margin: 5
    },
    fullDuration: {
        color: 'silver',
        fontSize: 12,
    }
})

export default Progress
