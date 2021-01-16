import axios from 'axios'
import { GCF_WATCHLIST } from '../env'

export const watchlistApi = (token?: string) => {
    
    const api = axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        },
        baseURL: GCF_WATCHLIST 
    })
    
    return {
        watchlist: async () => (await api.get<[]>('/')).data,

        status: async (filmId: string) => (await api.get<boolean>(`/?filmId=${filmId}&status=true`)).data,
        
        remove: async (filmId: string) => await api.delete(`/?filmId=${filmId}`),
        
        add: async (filmId: string) => await api.post('/', { filmId })
    }
}