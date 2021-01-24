import { INIT_TRACKS, PlayerActionTypes, PlayerState, SET_OPTION } from './types'

const initalState: PlayerState = {
    playback: {
        quality: 720,
        language: 'eng'
    },
    tracks: {
        audio: [],
        video: []
    }
}

export const playerReducer = (state = initalState, action: PlayerActionTypes ): PlayerState => {
    switch(action.type) {
        case INIT_TRACKS: 
            return {
                ...state,
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