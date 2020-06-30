import React, { createContext, useReducer, useEffect, useContext } from 'react'
import axios from 'axios'

import { AuthContext } from '../context'
import { IP } from '../env'

export const RatingContext = createContext()

const initialState = {
    ratingType: null,
    loading: true,
    likes: null,
    dislikes: null,
    ratings: null,
    imdb: null,
    imdbVotes: null,
    metascore: null,
    refresh: false
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_LIKES': 
            return {
                ...state,

                likes: action.payload.likes,
                dislikes: action.payload.dislikes,
            }
        case 'GET_RATING': 
            return {
                ...state,
                imdb: parseFloat(action.payload.imdb),
                imdbVotes: action.payload.imdbVotes,
                metascore: parseInt(action.payload.metascore)
            }
        case 'SET_RATING_TYPE':
            return {
                ...state,
                ratingType: action.payload,
                loading: false
            }
        case 'REFRESH':
            return {
                ...state,
                refresh: !state.refresh
            }
        default: 
            throw new Error()
    }
}

export const RatingContextProvider = ({ children, filmId, filmName }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { userId } = useContext(AuthContext)


    useEffect(() => {
        const getRating = async () => {
            try {
                const rating = await axios.get(`${IP}/omdb/rating/${filmName}`)
                
                dispatch({
                    type: 'GET_RATING',
                    payload: rating.data
                })
            }  catch (err) {
                console.log(err)
            }
        }

        getRating()

    }, [])

    useEffect(() => {
        const getLikes = async () => {
            try {
                const res = await axios.get(`${IP}/film/rating/${filmId}`)
                const status = await axios.post(`${IP}/rating/status`, {
                    userId,
                    filmId
                })

                dispatch({
                    type: 'GET_LIKES',
                    payload: res.data.rating
                })

                dispatch({
                    type: 'SET_RATING_TYPE',
                    payload: status.data.rating.status
                })
 
            } catch (err) {
                console.log(err)
            }
        } 
        getLikes()

    }, [state.refresh])

    return (
        <RatingContext.Provider value={[state, dispatch]}>
            {children}
        </RatingContext.Provider>
    )
}