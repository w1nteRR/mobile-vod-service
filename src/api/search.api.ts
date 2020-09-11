  
import { api } from './api'

import { IFilmShort } from '../interfaces/film/IFilm'
import { ISearchData } from '../interfaces/filter/IFilter'

export const searchApi = {
    byName: async (value: string) => {
        try {

            const films = await api.get<Array<IFilmShort>>(`/api/search/film/${value}`)

            return films.data

        } catch (err) {
            throw(err)
        }
    },
    byTag: async (tags: ISearchData) => {
        try {

            const films = await api.post('/api/search/film/filter', {
                data: {
                    ...tags
                }
            })

            return films.data.films

        } catch (err) {
            throw err
        }
    }
}