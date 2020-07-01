import { useContext } from 'react'
import axios from 'axios'

import { AuthContext } from '../../context'

import { IP } from '../../env'

export const useWatchLater = () => {
    
    const { userId } = useContext(AuthContext)

    const addToWatchLater = async (filmId, cb) => {
        try {

            await axios.put(`${IP}/library/watch-later/add`, {
                userId,
                filmId
            })
            
            cb()

        } catch (err) {
            console.log(err)
        } 
    }

    const removeFromWatchLater = async (filmId, cb) => {
        try {

            await axios.put(`${IP}/library/watch-later/remove`, {
                userId,
                filmId
            })

            cb()

        } catch (err) {
            console.log(err)
        }
    }

    const watchLaterStatus = async filmId => {
        try {

            const res = await axios.post(`${IP}/library/watch-later/status`, {
                userId,
                filmId
            })

            return res.data

        } catch (err) {
            console.log(err)
        }
    }

    return {
        addToWatchLater,
        watchLaterStatus,
        removeFromWatchLater
    }
}