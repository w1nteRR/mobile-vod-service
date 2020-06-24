import { useContext } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../context'

import { IP } from '../../env'

export const usePlaylist = () => {

    const { userId } = useContext(AuthContext)
    const navigation = useNavigation()

    const createPlaylist = async (name) => {
        try {

            const res = await axios.post(`${IP}/library/playlist/create`, {
                playlistName: name,
                userId
            })

            alert(res.data.message)

            navigation.goBack({
                status: 200
            })

        } catch (err) {
            console.log(err)
        }   
    }

    const deletePlaylist = async (playlistId) => {
        try {

            const res = await axios.put(`${IP}/library/playlist/remove`, {
                playlistId,
                userId
            })

            alert(res.data.message)
            
            navigation.navigate('Playlists', {
                status: 200
            })

        } catch (err) {
            console.log(err)
        }
    }

    const editNamePlaylist = async (playlistName, playlistId) => {
        try {

            const res = await axios.put(`${IP}/library/playlist/edit`, {
                playlistName,
                playlistId,
                userId
            })

            alert(res.data.message)
            
            navigation.navigate('Playlists', {
                status: 200
            })

        } catch (err) {
            console.log(err)
        }
    }

    const addToPlaylist = async (playlistId, filmId) => {
        try {

            const res = await axios.put(`${IP}/library/playlist/add-film`, {
                playlistId,
                userId,
                filmId
            })
            
            alert(res.data.message)
            
        } catch (err) {
            alert(err.response.data.message)
            console.log(err)
        }
    }

    return {
        createPlaylist,
        deletePlaylist,
        editNamePlaylist,
        addToPlaylist
    }
}