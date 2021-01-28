import { ThunkAction } from "redux-thunk"

import { RootState } from "../rootReducer"

export const SET_AUTH = 'SET_AUTH'
export const INIT_USER = 'INIT_USER'


export interface AuthState {
    isAuthenticated: boolean
}

interface SetAuth {
    type: typeof SET_AUTH
    payload: boolean
}


export type ActionTypes = SetAuth 

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionTypes>