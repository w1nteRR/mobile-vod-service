import React, { FC,  useRef } from 'react'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import Video from 'react-native-video'

import { Container } from '../common/utils/layout'

import { Control } from '../Player/Control'

import { usePlayer } from '../../hooks/player/usePlayer'

import { RootState } from '../../redux/rootReducer'

import { IP } from '../../env'


export const Player: FC = () => {

    const playerRef = useRef(null)
    
    const { 
        showHideControl, 
        writeTime, 
        seek, 
        lockFullScreen, 
        unlockFullScreen,
        getData, 
    } = usePlayer(playerRef)

    const player = useSelector((state: RootState) => state.player.player)    
    const playback = useSelector((state: RootState) => state.player.playback)
    
    return (
        <TouchableOpacity 
            onPress={() => showHideControl()} 
            activeOpacity={.8}
        >
            <Container direction='column'>
                <Video 
                    ref={playerRef}
                    resizeMode='contain'
                    paused={!player.isPlaying}
                    source={{
                        uri: `${IP}/static/Witcher/final.mpd`
                    }}
                    style={{
                        height: '100%',
                        width: '100%'
                    }} 

                    onLoad={data => getData(data)}
                    onProgress={time => writeTime(time.currentTime)}

                    selectedAudioTrack={{
                        type: 'language',
                        value: playback.language
                    }}
                    selectedVideoTrack={{
                        type: 'resolution',
                        value: playback.quality
                    }}
                />
                {
                    player.isControlOpened
                    &&
                    <Control 
                        onSeek={seek} 
                        lockFs={lockFullScreen} 
                        unlockFs={unlockFullScreen} 
                    />
                }
            </Container>
        </TouchableOpacity>
    )
}