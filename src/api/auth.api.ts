import { api } from './api'
import { ISignIn, IUser, ISignUp } from '../interfaces/auth/IAuth'

export const authApi = {
    signIn: async (data: ISignIn) => {
        try {

            const user = await api.post<IUser>('/api/auth/signin', {
                data: {
                    ...data
                }
            })
    
            return user.data

        } catch (err) {
            throw (err)
        }  
    },

    signUp: async (data: ISignUp) => {
        try {

            const candidate = await api.post('/api/auth/signup', {
                data: {
                    ...data
                }
            })

            return candidate.status

        } catch (err) {
            throw (err)
        }
    }
}