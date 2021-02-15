import { createSelector } from 'reselect'

import { RootState } from '../rootReducer'

const _resultSelector = (state: RootState) => state.search.result

export const getSearchResult = createSelector(_resultSelector, result => result) 