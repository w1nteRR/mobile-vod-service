import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Slider from '@react-native-community/slider'

import { Container } from '../common/utils/layout'
import { Text } from '../common/utils/typography'

import { RootState } from '../../redux/rootReducer'

interface IProgressProps {
    onSeek: (n: number) => void
}

export const Progress: FC<IProgressProps> = ({ onSeek }) => {

    const playback = useSelector((state: RootState) => state.player.playback)

    const _timeConverter = (time: number) => {
        const minutes = time >= 60 ? Math.floor(time / 60) : 0
        const seconds = Math.floor(time - minutes * 60)
    
        return `${minutes >= 10 ? minutes : + minutes}:${
          seconds >= 10 ? seconds : '' + seconds + '0'
        }`
    }

    const position = _timeConverter(playback.currentTime)
    const duration = _timeConverter(3664)
    
    return (
        <Container direction='column' h='100%' w='85%' >
            <Container justify='flex-start'>
                <Container w='100px' p='10px'>
                    <Text>{position}/</Text>
                    <Text>{duration}</Text>
                </Container>
            </Container>
            <Container>
                <Slider
                    style={{width: '100%', height: 50}}
                    maximumValue={playback.duration}
                    value={playback.currentTime}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#fff"
                    onValueChange={val => onSeek(val)}
                />
            </Container>
        </Container>
    )
}