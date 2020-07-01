import { useContext } from 'react'
import axios from 'axios'

import { SearchContext } from '../reducers/Search'

import { IP } from '../env'

export const useSearch = () => {

    const [state, dispatch] = useContext(SearchContext)
    
    for( let key in state.searchData ) {
        if(!state.searchData[key].length) {
            delete state.searchData[key]
        }
    }

    const addToSearchFilterData = (dataType, checkedData) => {
        dispatch({
            type: 'ADD_TO_SEARCH_DATA',
            payload: {
                key: dataType,
                data: checkedData
            }
        })
    }

    const searchByName = async name => {
        try {

            const res = await axios.get(`${IP}/search/film/${name}`)

            dispatch({
                type: 'GET_FILMS_FILTRED',
                payload: res.data.films
            })

            dispatch({
                type: 'CLEAR_FILTER_DATA'
            })

        } catch (err) {
            console.log(err)
        }
    }

    const searchByTags = async () => {
        try {

            const res = await axios.post(`${IP}/search/film/filter`, {
                data: state.searchData
            })

            dispatch({
                type: 'GET_FILMS_FILTRED',
                payload: res.data.films
            })

        } catch (err) {
            console.log(err)
        }
    }

    return {
        addToSearchFilterData,
        searchByTags,
        searchByName
    }
}

