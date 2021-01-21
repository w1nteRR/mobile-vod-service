import AsyncStorage from '@react-native-community/async-storage'

import { watchlistApi } from '../../api/watchlist.api'
import { ActionTypes, FETCH_WATCHLIST, FETCH_WATCHLIST_STATUS, REMOVE_FROM_WATCHLIST, ThunkTypes } from './types'

const _initWatchlist = (payload: []): ActionTypes => ({
    type: FETCH_WATCHLIST,
    payload
})

const _remove = (payload: string): ActionTypes => ({
    type: REMOVE_FROM_WATCHLIST,
    payload
})

export const toggleStatus = (payload: boolean): ActionTypes => ({
    type: FETCH_WATCHLIST_STATUS,
    payload: payload
})

export const fetchWatchlist = (): ThunkTypes => async dispatch => {
    try {
        const access = await AsyncStorage.getItem('accessToken')

        const watchlist = await watchlistApi(access!).watchlist()

        dispatch(_initWatchlist(watchlist))

    } catch (err) {
        console.log(err.response.request._response)
    }
}

export const fetchWatchlistStatus = (filmId: string): ThunkTypes => async dispatch => {
    try {
        const token = await AsyncStorage.getItem('accessToken')

        const status = await watchlistApi(token!).status(filmId)

        dispatch(toggleStatus(status))

    } catch (err) {
        console.log(err.response.request._response)
    }
}

export const removeFromWatchlist = (filmId: string): ThunkTypes => async dispatch => {
    try {
        const token = await AsyncStorage.getItem('accessToken')

        await watchlistApi(token!).remove(filmId)
        
        dispatch(_remove(filmId))
        dispatch(toggleStatus(false))

    } catch (err) {
        console.log(err.response.request._response)
    }
}

export const addToWatchlist = (filmId: string): ThunkTypes => async dispatch => {
    try {
        const token = await AsyncStorage.getItem('accessToken')

        await watchlistApi(token!).add(filmId)
        
        dispatch(toggleStatus(true))
        
    } catch (err) {
        console.log(err.response.request._response)
    }
}