import { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { AuthContext } from '../context'

export const useSearch = name => {
    const [films, setFilms] = useState()
    const { ip } = useContext(AuthContext)
    
    useEffect(() => {
        const searchQuery = async () => {
            try {
                const res = await axios.get(`http://${ip}:8000/search/${name}`)
                setFilms(res.data)
            } catch (err) {
                setFilms([])
            }
        }        
        searchQuery()

    }, [name])
    return films
}

