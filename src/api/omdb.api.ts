import axios from "axios"
import { OMDB_KEY } from "../env"

export const omdbApi = () => {
    const api = axios.create({
        baseURL: 'http://www.omdbapi.com'
    })

    return {
        episode: async (name: string, season: string, episode: string) => {
            return await api.get(`?t=${name}&Season=${season}&Episode=${episode}&apikey=${OMDB_KEY}`)
        }
    }
}

