import { RefObject, useCallback, useState } from 'react'
import Orientation from 'react-native-orientation'

export const usePlayer = (ref?: RefObject<any>) => {

    const [isControlOpen, setIsControlOpen] = useState(true)
    const [isPause, setPause] = useState(true)
    const [isLandscape, setLandscape] = useState(false)

    const toggleControl = () => setIsControlOpen(!isControlOpen)
    const togglePlay = () => setPause(!isPause)
   
    const seek = useCallback((time: number) => {
        ref!.current.seek(time)
    }, [])
    
    const lockFullScreen = () => {
        ref!.current.presentFullscreenPlayer()
        Orientation.lockToLandscape()
        setLandscape(true)
    }

    const unlockFullScreen = () => {
        ref!.current.dismissFullscreenPlayer()
        Orientation.lockToPortrait()
        setLandscape(false)
    }
    
    return {
        toggleControl,
        togglePlay,
        seek,
        lockFullScreen,
        unlockFullScreen,
        isControlOpen,
        isPause,
        isLandscape
    }
}