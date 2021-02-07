import { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import Auth0 from 'react-native-auth0'

import { domain, clientId } from '../../env'

import { setAuth } from '../../redux/auth/actions'

export const useAuth = () => {

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const auth0 = new Auth0({ domain, clientId })

    const storeTokens = async (tokens: {
        idToken: string, 
        accessToken: string
    }) => {
        try {

            await AsyncStorage.setItem('idToken', tokens.idToken)
            await AsyncStorage.setItem('accessToken', tokens.accessToken)
            
        } catch (err) {
            throw err
        }
    }

    const signInWithGoogle = async () => {
        try {

            let credentials = await auth0.webAuth.authorize({ 
                connection: 'google-oauth2', 
                scope: 'openid offline_access profile',
                audience: 'http://google_api'
            })

            storeTokens({
                idToken: credentials.idToken,
                accessToken: credentials.accessToken
            })

            dispatch(setAuth(true))

        } catch (err) {
            console.log(err)
        }
    }

    const signInWithPassword = async (username: string, password: string) => {

        if(!username.trim().length || !password.trim().length) return

        try {

            let credentials = await auth0.auth.passwordRealm({
                username,
                password,
                realm: 'Username-Password-Authentication',
                scope: 'openid offline_access profile',
                audience: 'http://google_api'
            })

            storeTokens({
                idToken: credentials.idToken,
                accessToken: credentials.accessToken
            })

            dispatch(setAuth(true))

        } catch (err) {
            console.log(err)
        }
    }

    const logout = useCallback(async () => {
        try {

            await auth0.webAuth.clearSession()

            await AsyncStorage.removeItem('idToken')
            await AsyncStorage.removeItem('accessToken')

            dispatch(setAuth(false))

        } catch (err) {
            console.log(err)
        }
    }, [])

    const getUser = async () => {
        try {

            const token = await AsyncStorage.getItem('accessToken')

            if(!token) return

            const user = await auth0.auth.userInfo({
                token
            })

            console.log(user)
            return user

        } catch (err) {
            console.log(err)
            // logout()
        }
    }

    useEffect(() => {    
        const getData = async () => {
            try {

                const jwt = await AsyncStorage.getItem('accessToken')

                jwt && dispatch(setAuth(true))

                setLoading(false)
    
            } catch (err) {
                console.log(err)
            }
        }
    
        getData()
	}, [])


    return {
        signInWithGoogle,
        signInWithPassword,
        logout,
        getUser,
        loading
    }
}