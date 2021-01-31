import axios from "axios"
import { FILM_GATEWAY } from "../env"

export const filmApi = () => {
    const api = axios.create({
        baseURL: FILM_GATEWAY
    })

    return {
        get: async (id: string) => (await api.get(`/film-get/?id=${id}`)).data
    }
}

