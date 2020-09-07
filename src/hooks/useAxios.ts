import { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { IP } from '../env'

export const useAxios = (url: string, options: AxiosRequestConfig) => {

    const [res, setRes] = useState<AxiosResponse | null>(null)
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        let cleanUp = false
        
        const fetch = async () =>{
            try {

                const res = await axios(`${IP}${url}`, options)

                if(!cleanUp) {
                    setRes(res)
                    setLoading(false)
                }

            } catch (err) {
                console.log(err)
            }
        }

        fetch()
        setLoading(true)

        return () => {
            cleanUp = true
        }

    }, [url, refresh])


    const refreshFetch = () => setTimeout(() => setRefresh(prevState => !prevState), 1000)
     
    return {
        res, loading, refreshFetch
    }
}