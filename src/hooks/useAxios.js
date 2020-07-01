import { useState, useEffect } from 'react'
import axios from 'axios'

import { IP } from '../env'

export const useAxios = (url, options) => {

    const [res, setRes] = useState(null)
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        let cleanUp = false
        const fetch = async () => {
            try {
                const res = await axios(`${IP}${url}`, options)
                if(!cleanUp) {
                    setRes(res.data)
                    setLoading(false)
                }

            } catch (err) {
                console.log(err)
            }
        }
        
        fetch()
        setLoading(true)
        
        return () => cleanUp = true

    }, [url, refresh])

    const refreshFetch = () => setTimeout(() => setRefresh(prevState => !prevState), 1000)
     
    return {
        res, loading, refreshFetch
    }
}