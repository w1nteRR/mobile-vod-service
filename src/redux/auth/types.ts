import { ThunkAction } from "redux-thunk"

import { RootState } from "../rootReducer"

export const SET_AUTH = 'SET_AUTH'

export interface AuthState {
    isAuthenticated: boolean
    token: string
}

interface SetAuthAction {
    type: typeof SET_AUTH,
    payload: {
        isAuthenticated: boolean
        token: string
    }
}


export type AuthActionTypes = SetAuthAction

export type AuthThunkType = ThunkAction<Promise<void>, RootState, unknown, AuthActionTypes>