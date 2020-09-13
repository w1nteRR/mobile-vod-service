import { AuthActionTypes, SET_AUTH } from "./types";

export const setAuth = (isAuthenticated: boolean): AuthActionTypes => ({
    type: SET_AUTH,
    payload: {
        isAuthenticated
    }
})