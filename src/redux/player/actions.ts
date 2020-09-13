import { INIT_PLAYER, PlayerActionTypes, SEEK_TIME, SET_OPTION, TOGGLE_CONTROL, TOGGLE_LOCK, TOGGLE_PLAY } from './types'

import { IVideoInfo } from '../../interfaces/player/IPlayer'

export const initPlayer = (data: IVideoInfo): PlayerActionTypes => ({
    type: INIT_PLAYER,
    payload: {
        audioTracks: data.audioTracks,
        videoTracks: data.videoTracks,
        duration: data.duration
    }
})

export const toggleControl = (): PlayerActionTypes => ({
    type: TOGGLE_CONTROL
})

export const togglePlay = (): PlayerActionTypes => ({
    type: TOGGLE_PLAY
})

export const toggleLock = (): PlayerActionTypes => ({
    type: TOGGLE_LOCK
})

export const seekTime = (time: number): PlayerActionTypes => ({
    type: SEEK_TIME,
    payload: {
        time
    }
})

export const setOption = (option: 'language' | 'quality', value: number | string ): PlayerActionTypes => ({
    type: SET_OPTION,
    payload: {
        option,
        value
    }
})