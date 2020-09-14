import { AuthActionTypes, SET_AUTH } from "./types";

export const setAuth = (isAuthenticated: boolean, token: string): AuthActionTypes => ({
    type: SET_AUTH,
    payload: {
        isAuthenticated,
        token
    }
})