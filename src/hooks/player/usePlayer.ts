import { RefObject } from 'react'
import { useDispatch } from 'react-redux'
import Orientation from 'react-native-orientation'

import { initPlayer, seekTime, toggleControl, toggleLock, togglePlay } from "../../redux/player/actions"
import { IVideoInfo } from '../../interfaces/player/IPlayer'


export const usePlayer = (ref?: RefObject<any>) => {

    const dispatch = useDispatch()
   
    const showHideControl = () => dispatch(toggleControl())

    const playStopPlayer = () => dispatch(togglePlay())

    const seek = (time?: number) => {
        ref!.current.seek(time)
        dispatch(seekTime(time!))
    }

    const writeTime = (time: number) => dispatch(seekTime(time))
    
    const lockFullScreen = () => {
        ref!.current.presentFullscreenPlayer()
        Orientation.lockToLandscape()
        dispatch(toggleLock())
    }

    const unlockFullScreen = () => {
        ref!.current.dismissFullscreenPlayer()
        Orientation.unlockAllOrientations()
        dispatch(toggleLock())
    }

    const getData = (data: IVideoInfo) => dispatch(initPlayer(data))

    
    return {
        showHideControl,
        playStopPlayer,
        writeTime,
        seek,
        lockFullScreen,
        unlockFullScreen,
        getData
    }
}