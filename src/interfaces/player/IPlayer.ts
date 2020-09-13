export interface IPlayerAudioTrack {
    bitrate: string
    index: number
    language: string
    title: string
    type: string
}

export interface IPlayerVideoTrack {
    bitrate: number
    codecs: string
    height: number
    width: number
    trackId: string
}

export interface IVideoInfo {
    audioTracks: Array<IPlayerAudioTrack>
    videoTracks: Array<IPlayerVideoTrack>
    duration: number
}