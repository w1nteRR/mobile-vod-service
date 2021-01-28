
import { ActionTypes, PlaylistsState, FETCH_PLAYLISTS } from './types'

const initialState: PlaylistsState = {
    playlists: []
}

export const playlistsReducer = (state = initialState, action: ActionTypes): PlaylistsState => {
    switch(action.type) {
        case FETCH_PLAYLISTS: 
            return {
                ...state,
                playlists: state.playlists.concat(action.payload)
            }
        default:
            return state
    }
}