import { createContext } from 'react'

export const PlayerContext = createContext()

export const initialPlayerState = {
    isSettingsOpen: false,
    settingsType: '',
    quality: 720,
    language: 'eng',
    isPlaying: false,
    audioTracks: [],
    videoTracks: [],
    subTracks: []
} 

export const playerReducer = (playerState, action) => {
    switch(action.type) {
        case 'toggleSettings': 
            return {
                ...playerState,
                isSettingsOpen: !playerState.isSettingsOpen,
                settingsType: playerState.settingsType = action.payload
            }
        case 'togglePlaying': 
            return {
                ...playerState,
                isPlaying: !playerState.isPlaying
            }    
        case 'setQuality': 
            return {
                ...playerState,
                quality: playerState.quality = action.payload
            }
        case 'setLanguage': 
            return {
                ...playerState,
                language: playerState.language = action.payload
            }          
        default: 
            return playerState
    }
}

    