import { createSelector } from 'reselect'

import { RootState } from '../rootReducer'

const _watchlistSelector = (state: RootState) => state.watchlist.watchlist

export const getWatchlist = createSelector(_watchlistSelector, watchlist => watchlist.slice(1))