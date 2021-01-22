import { ThunkAction } from "redux-thunk"

import { RootState } from "../rootReducer"

export const SET_AUTH = 'SET_AUTH'

export interface AuthState {
    isAuthenticated: boolean
}

interface SetAuthAction {
    type: typeof SET_AUTH
    payload: boolean
}


export type ActionTypes = SetAuthAction

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionTypes>