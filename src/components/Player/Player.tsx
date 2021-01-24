import React, { FC, useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from '../common/utils/layout'
import { Button } from '../common/styled/buttons/buttons.shared'

import { HeaderFilm } from '../Film/header.film'
import { PlayerProgress } from './player.progress'

import { usePlayer } from '../../hooks/player/usePlayer'

import { RootState } from '../../redux/rootReducer'
import { initTracks } from '../../redux/player/actions'

import { IP } from '../../env'
import { VideoData } from '../../interfaces/player/IPlayer'


export const Player: FC<{ name: string }> = ({
    name
}) => {
    
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const { language, quality } = useSelector((state: RootState) => state.player.playback)

    const playerRef = useRef(null)
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const {
        lockFullScreen, 
        unlockFullScreen,
        toggleControl, 
        togglePlay, 
        seek, 
        isControlOpen, 
        isPause,
        isLandscape 
    } = usePlayer(playerRef)


    const _onLoad = (data: VideoData) => {
        
        const { duration, currentTime, videoTracks, audioTracks } = data

        setDuration(duration)
        setCurrentTime(currentTime)

        dispatch(initTracks(audioTracks, videoTracks))
    }

    return (
        <TouchableOpacity 
            onPress={toggleControl} 
            activeOpacity={.8}
        >
            <Container direction='column' h='100%'>
                <Video 
                    ref={playerRef}
                    resizeMode='none'
                    paused={isPause}
                    source={{ uri: `${IP}/static/Witcher/final.mpd` }}
                    onLoad={_onLoad}
                    onProgress={time => setCurrentTime(time.currentTime)}
                    selectedAudioTrack={{ type: 'language', value: language }}
                    selectedVideoTrack={{ type: 'resolution', value: quality }}
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute'
                    }}
               />
                {
                    isControlOpen
                    &&
                    <>
                    <HeaderFilm 
                        name={name} 
                        sub='Player'
                    >
                        <Button 
                            iconName='screen-rotation-lock' 
                            {...headerBtn}
                            onPress={
                                isLandscape 
                                ?   unlockFullScreen
                                :   lockFullScreen
                            }
                            bgColor={isLandscape ? 'danger' : 'dark'}
                        />
                        <Button 
                            iconName='cog'
                            bgColor='dark'   
                            onPress={() => navigation.navigate('PlayerModal')}                      
                            {...headerBtn}                             
                        />
                    </HeaderFilm>
                    <Container 
                        p='10px'
                        h='200px' 
                    >
                        <Button 
                            bgColor=''
                            iconName={isPause ? 'play' : 'pause'}
                            onPress={togglePlay}  
                            {...playBtn}
                        />
                    </Container>  
                    <PlayerProgress 
                        duration={duration} 
                        currentTime={currentTime}
                        onSeek={time => {
                            seek(time)
                            setCurrentTime(time)
                        }} 
                    />
                    </>
                }  
            </Container>
        </TouchableOpacity>
    )
}

const playBtn = {
    h: '75px',
    w: '75px',
    iconSize: 50,
    brRadius: '100px'
}

const headerBtn = {
    h: '40px',
    w: '40px',
    iconSize: 13,
    m: '0 10px 0 0',
    iconColor: '#fff',
    brRadius: '10px'
}