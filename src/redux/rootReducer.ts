import { combineReducers } from 'redux'

import { searchReducer } from './search/reducer'
import { playerReducer } from './player/reducer'

import { SearchState } from './search/types'
import { PlayerState } from './player/types'

export const rootReducer = () => 
    combineReducers({
        search: searchReducer,
        player: playerReducer
    })

export type RootState = {
    search: SearchState
    player: PlayerState
}