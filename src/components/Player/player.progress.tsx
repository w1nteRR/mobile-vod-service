import React, { memo } from 'react'
import Slider from '@react-native-community/slider'
import LinearGradient from 'react-native-linear-gradient'

import { PRIMARY } from '../common/utils/colors'
import { Container } from '../common/utils/layout'
import { TextT, Text } from '../common/utils/typography'

interface IPlayerProgressProps {
    duration: number
    currentTime: number
    onSeek: (time: number) => void
}

export const PlayerProgress = memo<IPlayerProgressProps>(({
    duration,
    currentTime,
    onSeek
}) => {

    const _secondsToHMS = (seconds: number) => new Date(seconds * 1000).toISOString().substr(11, 8) 

    return (
        <Container 
            direction='column' 
            h='100px' 
            style={{ position: 'absolute', bottom: 0}}
        >
            <LinearGradient
                colors={['rgba(0, 0, 0, 0) 0%', 'rgba(0, 0, 0, 0.8) 23.23%', 'black']} 
                style={{
                    flex: 1,
                    padding: 10, 
                    height: '100%',
                    width: '100%'
                }}
            >
                <Container justify='flex-start'>
                    <Text size='10px'>{_secondsToHMS(currentTime)} /</Text>
                    <TextT> {_secondsToHMS(duration)}</TextT>
                </Container>
                <Slider
                    style={{
                        width: '100%', 
                        height: 50
                    }}
                    maximumValue={duration}
                    value={currentTime}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#fff"
                    thumbTintColor={PRIMARY}
                    onValueChange={value => onSeek(value)}
                />
            </LinearGradient>
        </Container>
    )
})