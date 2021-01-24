import { OnLoadData } from "react-native-video";

export interface IAudioTrack {
    bitrate: string
    index: number
    language: string
    title: string
    type: string
}

export interface IVideoTrack {
    bitrate: number
    codecs: string
    height: number
    width: number
    trackId: string
}

export interface IVideoInfo {
    audioTracks: Array<IAudioTrack>
    videoTracks: Array<IVideoTrack>
    duration: number
}

export interface VideoData extends OnLoadData {
    videoTracks: Array<IVideoTrack>
    audioTracks: Array<IAudioTrack>
}