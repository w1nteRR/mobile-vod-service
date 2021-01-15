import { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import Auth0 from 'react-native-auth0'

import { setAuth } from '../../redux/auth/actions'

export const useAuth = () => {

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const auth0 = new Auth0({
        domain: 'dev-bngj4fju.eu.auth0.com',
        clientId: 'nD4DmEVNAorio505mkkZilV56nmJEtUn'
    })

    const storeToken = async (jwt: string) => {
        try {

            await AsyncStorage.setItem('userData', jwt)
            
        } catch (err) {
            throw err
        }
    }

    const signInWithGoogle = async () => {
        try {

            let credentials = await auth0.webAuth.authorize({ connection: 'google-oauth2', scope: 'openid profile offline_access' })

            storeToken(credentials.accessToken)

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
                realm: 'Username-Password-Authentication'
            })

            storeToken(credentials.accessToken)

            dispatch(setAuth(true))

        } catch (err) {
            console.log(err)
        }
    }

    const logout = useCallback(async () => {
        try {

            await auth0.webAuth.clearSession()

            await AsyncStorage.removeItem('userData')

            dispatch(setAuth(false))

        } catch (err) {
            console.log(err)
        }
    }, [])

    const getUser = async () => {
        try {

            const token = await AsyncStorage.getItem('userData')

            if(!token) return

            const user = await auth0.auth.userInfo({
                token
            })

            return user

        } catch (err) {
            console.log(err)
            // logout()
        }
    }

    useEffect(() => {    
        const getData = async () => {
            try {

                const jwt = await AsyncStorage.getItem('userData')

                
                
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