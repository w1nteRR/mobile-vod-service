import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

import { authApi } from '../../api/auth.api'

import { ISignIn, ISignUp } from '../../interfaces/auth/IAuth'
import { setAuth } from '../../redux/auth/actions'

export const useAuth = () => {

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const storeToken = async (jwt: string) => {
        try {

            await AsyncStorage.setItem('userData', JSON.stringify(jwt))
            
        } catch (err) {
            throw err
        }
    }
    
    const signin = async (data: ISignIn) => {
        try {

            const res = await authApi.signIn(data)

            await storeToken(res.token)
            dispatch(setAuth(true, res.token))

        } catch (err) {
            throw err
        }
    }

    const signup = async (data: ISignUp) => {
        try {
            
            return await authApi.signUp(data)

        } catch (err) {
            throw err
        }
    }

    const logout = async () => {
        try {

            await AsyncStorage.removeItem('userData')
            dispatch(setAuth(false, ''))

        } catch (err) {
            throw err
        }
    }

    useEffect(() => {    
        const getData = async () => {
            try {

                const jwt = await AsyncStorage.getItem('userData')
                
                jwt && dispatch(setAuth(true, jwt))
                

                setLoading(false)
    
            } catch (err) {
                console.log(err)
            }
        }
    
        getData()
	}, [])


    return {
        signin,
        signup,
        logout,
        loading
    }
}