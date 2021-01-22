import { ActionTypes, SET_AUTH } from "./types";

export const setAuth = (isAuthenticated: boolean): ActionTypes => ({
    type: SET_AUTH,
    payload: isAuthenticated
})
