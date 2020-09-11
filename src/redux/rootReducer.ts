import { combineReducers } from 'redux'

import { searchReducer } from './search/reducer'

import { SearchState } from './search/types'

export const rootReducer = () => 
    combineReducers({
        search: searchReducer
    })

export type RootState = {
    search: SearchState
}