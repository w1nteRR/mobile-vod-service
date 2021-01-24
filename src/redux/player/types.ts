import { IAudioTrack, IVideoTrack } from '../../interfaces/player/IPlayer'

export const INIT_TRACKS = 'INIT_TRACKS'

export const SEEK_TIME = 'SEEK_TIME'
export const SET_OPTION = 'SET_OPTION'

export interface PlayerState {
    playback: {
        quality: number
        language: string
    }
    tracks: {
        audio: Array<IAudioTrack>
        video: Array<IVideoTrack>
    }
}

interface InitTracksAction {
    type: typeof INIT_TRACKS,
    payload: {
        audioTracks: Array<IAudioTrack>
        videoTracks: Array<IVideoTrack>
    }
}

interface SetOptionAction {
    type: typeof SET_OPTION,
    payload: {
        option: 'language' | 'quality',
        value: string | number
    }
}

export type PlayerActionTypes = InitTracksAction | SetOptionAction

