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
        watchlist: async () => (await api.get<[]>('/watchlist/user')).data,

        status: async (filmId: string) => (await api.get(`/watchlist/status/?filmId=${filmId}`)).data,
        
        remove: async (filmId: string) => await api.delete(`/watchlist/remove/?filmId=${filmId}`),
        
        add: async (filmId: string) => await api.post('/watchlist/add', { filmId })
    }
}