import axios from "axios"
import { OMDB_KEY } from "../env"

export const ratingApi = () => {
    const api = axios.create({
        baseURL: 'http://www.omdbapi.com'
    })

    return {
        rating: async (name: string) => {
            const res = await api.get(`?t=${name}&apikey=${OMDB_KEY}`)

            const { Ratings, imdbRating, imdbVotes } = res.data

            return {
                Ratings,
                imdbRating,
                imdbVotes
            }
        }
    }
}

