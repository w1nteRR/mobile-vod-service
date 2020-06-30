import { useContext } from 'react'
import axios from 'axios'

import { AuthContext } from '../../context'
import { RatingContext } from '../../reducers/Rating'
import { IP } from '../../env'

export const useRating = filmId => {

    const { userId } = useContext(AuthContext)
    const [state, dispatch] = useContext(RatingContext)
    
    const addToLiked = async () => {
        try {

            if(state.ratingType === 'dislike') removeFromDisliked(filmId)
        
            await axios.put(`${IP}/rating/set-like`, {
                filmId,
                userId
            })
    
            dispatch({
                type: 'REFRESH'
            })

        } catch (err) {
            console.log(err)
        }
    }

    const addToDisliked = async () => {
        try {

            if(state.ratingType === 'like') removeFromLiked(filmId)
            
            await axios.put(`${IP}/rating/set-dislike`, {
                filmId,
                userId
            })

            dispatch({
                type: 'REFRESH'
            })
             
        } catch (err) {
            console.log(err)
        }
    }

    const removeFromDisliked = async () => {
        try {
            
            await axios.put(`${IP}/rating/remove-dislike`, {
                filmId,
                userId
            })

            dispatch({
                type: 'REFRESH'
            })

        } catch (err) {
            console.log(err)
        }
    }

    const removeFromLiked = async () => {
        try {

            await axios.put(`${IP}/rating/remove-like`, {
                filmId,
                userId
            })

            dispatch({
                type: 'REFRESH'
            }) 

        } catch (err) {
            console.log(err)
        }
    }

    return {
        addToLiked,
        addToDisliked,
        removeFromDisliked,
        removeFromLiked
    }
}