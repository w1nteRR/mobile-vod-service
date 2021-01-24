import { INIT_TRACKS, PlayerActionTypes, SET_OPTION } from './types'

import { IAudioTrack, IVideoTrack } from '../../interfaces/player/IPlayer'

export const initTracks = (audioTracks: Array<IAudioTrack>, videoTracks: Array<IVideoTrack>): PlayerActionTypes => ({
    type: INIT_TRACKS,
    payload: {
        audioTracks,
        videoTracks
    }
})

export const setOption = (option: 'language' | 'quality', value: number | string ): PlayerActionTypes => ({
    type: SET_OPTION,
    payload: {
        option,
        value
    }
})