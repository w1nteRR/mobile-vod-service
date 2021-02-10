import { createSelector } from 'reselect'

import { RootState } from '../rootReducer'

const _userSelector = (state: RootState) => state.auth.user

export const getUser = createSelector(_userSelector, user => user)