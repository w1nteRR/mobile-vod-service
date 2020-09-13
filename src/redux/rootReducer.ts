import { combineReducers } from 'redux'

import { searchReducer } from './search/reducer'
import { playerReducer } from './player/reducer'
import { authReducer } from './auth/reducer'

import { SearchState } from './search/types'
import { PlayerState } from './player/types'
import { AuthState } from './auth/types'

export const rootReducer = () => 
    combineReducers({
        search: searchReducer,
        player: playerReducer,
        auth: authReducer
    })

export type RootState = {
    search: SearchState
    player: PlayerState
    auth: AuthState
}