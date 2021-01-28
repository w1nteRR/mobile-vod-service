import { ThunkAction } from 'redux-thunk'

import { IPlaylist } from '../../interfaces/list/IPlaylist'

import { RootState } from '../rootReducer'

export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS'

export interface PlaylistsState {
    playlists: Array<IPlaylist>
}


interface FetchPlaylist {
    type: typeof FETCH_PLAYLISTS
    payload: Array<IPlaylist>
}


export type ActionTypes = FetchPlaylist

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionTypes>