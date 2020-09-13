import { IPlayerAudioTrack, IPlayerVideoTrack } from '../../interfaces/player/IPlayer'

export const INIT_PLAYER = 'INIT_PLAYER'

export const TOGGLE_CONTROL = 'TOGGLE_CONTROL'
export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const TOGGLE_LOCK = 'TOGGLE_LOCK'

export const SEEK_TIME = 'SEEK_TIME'
export const SET_OPTION = 'SET_OPTION'


export interface PlayerState {
    player: {
        isPlaying: boolean
        isControlOpened: boolean
        isLock: boolean
    }
    playback: {
        quality: number
        language: string
        duration: number
        currentTime: number
    }
    tracks: {
        audio: Array<IPlayerAudioTrack>
        video: Array<IPlayerVideoTrack>
    }
}

interface InitPlayerAction {
    type: typeof INIT_PLAYER,
    payload: {
        audioTracks: Array<IPlayerAudioTrack>
        videoTracks: Array<IPlayerVideoTrack>
        duration: number
    }
}

interface ToggleControlAction {
    type: typeof TOGGLE_CONTROL
}

interface TogglePlayAction {
    type: typeof TOGGLE_PLAY
}

interface ToggleLockAction {
    type: typeof TOGGLE_LOCK
}

interface SeekTimeAction {
    type: typeof SEEK_TIME,
    payload: {
        time: number
    }
}

interface SetOptionAction {
    type: typeof SET_OPTION,
    payload: {
        option: 'language' | 'quality',
        value: string | number
    }
}

export type PlayerActionTypes = 
    InitPlayerAction | 
    ToggleControlAction |
    ToggleLockAction | 
    TogglePlayAction | 
    SeekTimeAction |
    SetOptionAction

