import { ThunkAction } from "redux-thunk"

import { RootState } from "../rootReducer"

export const SET_AUTH = 'SET_AUTH'
export const SET_USER = 'SET_USER'

export const TOGGLE_LOADING = 'TOGGLE_LOADING'

export interface User {
    picture: string
    nickname: string
    name?: string
}

export interface AuthState {
    isAuthenticated: boolean
    user: User
    loading: boolean
}

interface SetAuth {
    type: typeof SET_AUTH
    payload: boolean
}

interface SetUser {
    type: typeof SET_USER
    payload: User
}

interface ToggleLoading {
    type: typeof TOGGLE_LOADING
    payload: boolean
}


export type ActionTypes = SetAuth | SetUser | ToggleLoading

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionTypes>