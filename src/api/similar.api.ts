import axios from "axios"

import { SIMILAR_GATEWAY } from "../env"
import { IFilmShort } from "../interfaces/film/IFilm"

export const similarApi = () => {
  const api = axios.create({
    baseURL: SIMILAR_GATEWAY
  })

  return {
    tags: async (tags: Array<string>): Promise<Array<IFilmShort>> => (await api.post(`/similar/tags`, { tags })).data.films
  }
}

