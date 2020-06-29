import { useContext } from 'react'
import axios from 'axios'

import { AuthContext } from '../../context'

import { IP } from '../../env'

export const useWatchLater = () => {
    
    const { userId } = useContext(AuthContext)

    const addToWatchLater = async filmId => {
        try {

            const res = await axios.put(`${IP}/library/watch-later/add`, {
                userId,
                filmId
            })

            alert(res.data.message)

        } catch (err) {
            console.log(err)
        } 
    }

    const removeFromWatchLater = async filmId => {
        try {

            const res = await axios.put(`${IP}/library/watch-later/remove`, {
                userId,
                filmId
            })

            alert(res.data.message)

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