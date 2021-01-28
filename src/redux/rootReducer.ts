import { combineReducers } from 'redux'

import { searchReducer } from './search/reducer'
import { playerReducer } from './player/reducer'
import { authReducer } from './auth/reducer'
import { watchlistReducer } from './watchlist/reducer'
import { playlistsReducer } from './playlists/reducer'

import { SearchState } from './search/types'
import { PlayerState } from './player/types'
import { AuthState } from './auth/types'
import { WatchlistState } from './watchlist/types'
import { PlaylistsState } from './playlists/types'

export const rootReducer = () => 
    combineReducers({
        search: searchReducer,
        player: playerReducer,
        auth: authReducer,
        watchlist: watchlistReducer,
        playlists: playlistsReducer
    })

export type RootState = {
    search: SearchState
    player: PlayerState
    auth: AuthState
    watchlist: WatchlistState
    playlists: PlaylistsState
}