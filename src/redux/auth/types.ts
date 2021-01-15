import { ThunkAction } from "redux-thunk"

import { RootState } from "../rootReducer"

export const SET_AUTH = 'SET_AUTH'

export interface AuthState {
    isAuthenticated: boolean
}

interface SetAuthAction {
    type: typeof SET_AUTH,
    payload: boolean
}


export type AuthActionTypes = SetAuthAction

export type AuthThunkType = ThunkAction<Promise<void>, RootState, unknown, AuthActionTypes>