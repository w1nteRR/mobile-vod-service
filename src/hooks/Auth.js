import { useState, useCallback, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export const useAuth = () => {
	const [token, setToken] = useState(null)
	const [userId, setUserId] = useState(null)

	const login = useCallback((jwt, id) => {
		setToken(jwt)
        setUserId(id)
        const storeData = async () => {
            try {
                await AsyncStorage.setItem('userData', JSON.stringify({
                    userId: id,
                    token: jwt
                }))
            } catch (e) {
                console.log('aerr')
            }
        }
        storeData()
        
    }, [])
    
	const logout = useCallback(() => {
		setToken(null)
		setUserId(null)
		AsyncStorage.removeItem('userData')
	}, [])

	useEffect(() => {
		const data = AsyncStorage.getItem('userData')
		if (data && data.token) {
			login(data.token, data.userId)
        }
        
        const getData = async () => {
            try {
              const value = await AsyncStorage.getItem('userData')
              if(value !== null) {
                login(JSON.parse(value).token, JSON.parse(value).userId)
              }
            } catch(e) {
                console.log(e)
            }
        }
    
        getData()
	}, [login])


	return { login, logout, token, userId }
}