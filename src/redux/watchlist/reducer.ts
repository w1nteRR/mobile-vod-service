import { 
    WatchlistState,
    ActionTypes,
    FETCH_WATCHLIST_STATUS,
    FETCH_WATCHLIST,
    REMOVE_FROM_WATCHLIST
} from './types'

const initalState: WatchlistState = {
    watchlist: [],
    status: false
}

export const watchlistReducer = (state = initalState, action: ActionTypes ): WatchlistState => {
    switch(action.type) {
        case FETCH_WATCHLIST_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case FETCH_WATCHLIST:
            return {
                ...state,
                watchlist: action.payload
            }
        case REMOVE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter(film => film._id !== action.payload)
            }
        default:
            return state
    }
}