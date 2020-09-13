import { INIT_PLAYER, PlayerActionTypes, PlayerState, SEEK_TIME, SET_OPTION, TOGGLE_CONTROL, TOGGLE_LOCK, TOGGLE_PLAY } from './types'

const initalState: PlayerState = {
    player: {
       isPlaying: false,
       isControlOpened: false,
       isLock: false
    },
    playback: {
        quality: 720,
        language: 'eng',
        duration: 0,
        currentTime: 0,
    },
    tracks: {
        audio: [],
        video: []
    }
}

export const playerReducer = (state = initalState, action: PlayerActionTypes ): PlayerState => {
    switch(action.type) {
        case TOGGLE_CONTROL:
            return {
                ...state,
                player: {
                    ...state.player,
                    isControlOpened: !state.player.isControlOpened 
                }
            }
        case TOGGLE_PLAY:
            return {
                ...state,
                player: {
                    ...state.player,
                    isPlaying: !state.player.isPlaying
                }
            }
        case TOGGLE_LOCK:
            return {
                ...state,
                player: {
                    ...state.player,
                    isLock: !state.player.isLock
                }
            }
        case SEEK_TIME:
            return {
                ...state,
                playback: {
                    ...state.playback,
                    currentTime: action.payload.time
                }
            }
        case INIT_PLAYER: 
            return {
                ...state,
                playback: {
                    ...state.playback,
                    duration: action.payload.duration
                },
                tracks: {
                    audio: action.payload.audioTracks,
                    video: action.payload.videoTracks
                }
            }
        case SET_OPTION:
            return {
                ...state,
                playback: {
                    ...state.playback,
                    [action.payload.option]: action.payload.value
                }
            }
        default:
            return state
    }
}