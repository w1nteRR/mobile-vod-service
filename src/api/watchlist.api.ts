import axios from 'axios'
import { WATCHLIST_GATEWAY } from '../env'

export const watchlistApi = (token?: string) => {
    
    const api = axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        },
        baseURL: WATCHLIST_GATEWAY 
    })
    
    return {
        watchlist: async () => (await api.get<[]>('/user')).data,

        status: async (filmId: string) => (await api.get<boolean>(`/status/?filmId=${filmId}`)).data,
        
        remove: async (filmId: string) => await api.delete(`/remove/?filmId=${filmId}`),
        
        add: async (filmId: string) => await api.post('/add', { filmId })
    }
}