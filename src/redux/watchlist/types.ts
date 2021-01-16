import { ThunkAction } from "redux-thunk"
import { IFilmShort } from "../../interfaces/film/IFilm"

import { RootState } from "../rootReducer"

export const FETCH_WATCHLIST = 'FETCH_WATCHLIST'
export const FETCH_WATCHLIST_STATUS = 'FETCH_WATCHLIST_STATUS'

export const REMOVE_FROM_WATCHLIST = 'REMOVE_WATCHLIST'
export const CLEAN_WATCHLIST = 'CLEAN_WATCHLIST'

export const TOGGLE_LOADING = 'TOGGLE_LOADING'

export interface WatchlistState {
    watchlist: Array<IFilmShort>
    status: boolean
}


interface FetchWatchlist {
    type: typeof FETCH_WATCHLIST
    payload: []
}

interface FetchWatchlistStatus {
    type: typeof FETCH_WATCHLIST_STATUS
    payload: boolean
}

interface RemoveFromWatchlist {
    type: typeof REMOVE_FROM_WATCHLIST
    payload: string
}

interface CleanWatchlist {
    type: typeof CLEAN_WATCHLIST
}

export type ActionTypes = FetchWatchlist | FetchWatchlistStatus | RemoveFromWatchlist | CleanWatchlist
export type ThunkTypes = ThunkAction<Promise<void>, RootState, unknown, ActionTypes>