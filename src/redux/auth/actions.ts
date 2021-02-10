import AsyncStorage from "@react-native-community/async-storage"
import Auth0 from "react-native-auth0"

import { ActionTypes, ThunkType, SET_AUTH, SET_USER, User, TOGGLE_LOADING } from "./types"

import { domain, clientId, GOOGLE_CONFIG, REALM_CONFIG } from '../../env'

const auth0 = new Auth0({ domain, clientId })

const _setAuth = (payload: boolean): ActionTypes => ({
    type: SET_AUTH,
    payload
})

const _setUser = (payload: User): ActionTypes => ({
    type: SET_USER,
    payload
})

const _toggleLoading = (payload: boolean): ActionTypes => ({
    type: TOGGLE_LOADING,
    payload
})

export const login = (): ThunkType => async dispatch => {
    try {
        const token = await AsyncStorage.getItem('accessToken')

        if(token) {
            const { nickname, picture, name } = await auth0.auth.userInfo({ token })

            dispatch(_setUser({ nickname, picture, name }))
            dispatch(_setAuth(true))
        }

    } catch (err) {
        console.log(err.message)
    } finally {
        dispatch(_toggleLoading(false))
    }
}

export const logout = (): ThunkType => async dispatch => {
    try {
        await auth0.webAuth.clearSession()
        await AsyncStorage.removeItem('accessToken')

        dispatch(_setUser({ name: '', nickname: '', picture: '' }))
        dispatch(_setAuth(false))

    } catch (err) {
        console.log(err.message)
    }
}

export const signInGoogle = (): ThunkType => async dispatch => {
    
    const { connection, scope, audience } = GOOGLE_CONFIG

    try {
        const credentials = await auth0.webAuth.authorize({ 
            connection, 
            scope,
            audience
        })

        await AsyncStorage.setItem('accessToken', credentials.accessToken)

        dispatch(login())

    } catch (err) {
        console.log(err.message)
    }
}

export const signInRealm = (password: string, username: string): ThunkType => async dispatch => {
    
    const { realm, scope, audience } = REALM_CONFIG

    try {
        const credentials = await auth0.auth.passwordRealm({ 
            password,
            username,
            realm, 
            scope,
            audience
        })

        await AsyncStorage.setItem('accessToken', credentials.accessToken)

        dispatch(login())
        
    } catch (err) {
        console.log(err.message)
    }
}