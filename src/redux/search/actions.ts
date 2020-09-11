import { 
    SearchActionTypes, 
    SearchThunkType, 
    GET_FILMS_BY_NAME, 
    INIT_TAGS, 
    SET_ACTIVE_TAG, 
    SET_SEARCH_DATA, REMOVE_SEARCH_DATA 
} from './types'

import { IFilmShort} from '../../interfaces/film/IFilm'

import { searchApi } from '../../api/search.api'

import { IFilter } from '../../interfaces/filter/IFilter'

import genres from '../../utils/filters/genres.json'
import companies from '../../utils/filters/companies.json'
import years from '../../utils/filters/years.json'


const _setFilms = (films: Array<IFilmShort>): SearchActionTypes => ({
    type: GET_FILMS_BY_NAME,
    payload: films
})

export const initTags = (): SearchActionTypes => ({
    type: INIT_TAGS,
    payload: {
        genr: genres,
        company: companies,
        year: years
    }
})

export const setActiveTag = (tags: any): SearchActionTypes => ({
    type: SET_ACTIVE_TAG,
    payload: tags
})

export const setSearchData = (key: string, data: Array<IFilter>): SearchActionTypes => ({
    type: SET_SEARCH_DATA,
    payload: {
        key,
        data
    }
})

export const removeSearchData = (key: string): SearchActionTypes => ({
    type: REMOVE_SEARCH_DATA,
    payload: {
        key
    }
})


export const getFilmsByName = (name: string): SearchThunkType => {
    return async dispatch => {
        try {

            const films = await searchApi.byName(name)

            dispatch(_setFilms(films))

        } catch (err) {
            console.log(err)
        }
    }
}

export const getFilmsByTag = (): SearchThunkType => {
    return async (dispatch, getState) => {

        const { search: { searchData } } = getState()

        try {

            const films = await searchApi.byTag(searchData)

            dispatch(_setFilms(films))

        } catch (err) {
            console.log(err)
        }
    }
}