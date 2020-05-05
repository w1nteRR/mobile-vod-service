import React, { useState, useContext, createRef, useEffect } from 'react'
import { 
    View, 
    StyleSheet, 
    TouchableOpacity,
    BackHandler,
    Alert
} from 'react-native'
import axios from 'axios'
import Video from 'react-native-video'
import { useNavigation } from '@react-navigation/native'

import Play from './Buttons/Play'
import Rotation from './Buttons/Rotation'

import Progress from './Progress'

import { PlayerContext } from '../../reducers/Player'
import SettingsPlayerButton from '../buttons/SettingsPlayer.button'

import { AuthContext } from '../../context'


const Player = ({ timeContinue, filmId, filmImg }) => {
    
    const navigation  = useNavigation()
    
    const { playerState } = useContext(PlayerContext)
    const { userId } = useContext(AuthContext)

    const videoRef = createRef()

    const [controlsVisible, setControlsVisible] = useState(1)
    const [audioTracks, setAudioTracks] = useState([])
    const [videoTracks, setVideoTracks] = useState([])
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [continueT, setContinue] = useState()

    const getVideoInfo = payload => {
        setAudioTracks(payload.audioTracks)
        setVideoTracks(payload.videoTracks)
        setDuration(payload.duration)
        setCurrentTime(payload.currentTime)
        setContinue(timeContinue)
    }


    const onSeek = (data) => {
        videoRef.current.seek(data)
        setCurrentTime(data);
    }
    
    playerState.audioTracks = audioTracks
    playerState.videoTracks = videoTracks

    useEffect(() => {
        const backAction = async () => {
            try {   
                await axios.put('http://192.168.43.87:8000/library/watch_continue/create', {  
                    time: currentTime,
                    userId: userId,
                    filmId: filmId,
                    filmImg: filmImg

                })
                Alert.alert('Your watching data has been saved, you can continue watch it later...')
            } catch (err) {
                console.log(err)
                Alert.alert('Unable to save your watching data, you may be offline...')
            }

            return navigation.goBack()
        }
    
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove()
      }, [currentTime])

    return (
        <>
        <TouchableOpacity 
            activeOpacity={.9}
            style={styles.container}
            onPress={() => setControlsVisible((prevState) => prevState === 1 ? -1 : 1)}
        >
            <View style={{...styles.controlsContainer, opacity: controlsVisible, zIndex: controlsVisible}}>
                <View style={{width: 65, position: 'relative', left: '40%', bottom: 30}}>
                    <Play />
                </View>
                <View style={styles.bottomControls}>
                    <View style={{height: '100%', width: '70%'}}>
                        <Progress
                            currentTime={currentTime}
                            onSeek={onSeek}
                            duration={duration}
                        />
                    </View>
                    <View style={{
                            height: '100%', 
                            width: '30%', 
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            top: 10
                        }}>
                        <SettingsPlayerButton />
                        <Rotation />
                    </View>   
                </View>
            </View>
            <Video 
                style={styles.videoContainer}
                resizeMode='contain'
                ref={videoRef}   
                paused={!playerState.isPlaying}             
                source={{
                    uri: "http://192.168.43.87:8000/static/Witcher/final.mpd"
                }} 
                onLoad={(payload) => getVideoInfo(payload)}
                seek={continueT}
                onProgress={(payload) => setCurrentTime(payload.currentTime)}
                selectedAudioTrack={{
                    type: 'language',
                    value: playerState.language
                }}
                selectedVideoTrack={{
                    type: 'resolution',
                    value: playerState.quality
                }}
                
            />
        </TouchableOpacity>
     </>
    )
}
const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#171717'
    },
    controlsContainer: {
        position: 'relative',
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'column',
        top: '46%'
    },  
    bottomControls: {
        width: '100%', 
        height: 50, 
        bottom: -10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    leftContainer: {
        width: '50%',
        height: 50,
        justifyContent: 'center'
    }, 
    rightContainer: {
        width: '20%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },  
    progressContainer: {
        width: '90%',
        bottom: 10,    
    },
    videoContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0
    },
    sas: {
        width: '100%',
        height: 150,
        backgroundColor: 'red',
        position: 'relative',
        bottom: 0
    }
})

export default Player