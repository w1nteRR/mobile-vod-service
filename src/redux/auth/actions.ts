import { ActionTypes, SET_AUTH } from "./types";

export const setAuth = (payload: boolean): ActionTypes => ({
    type: SET_AUTH,
    payload
})

