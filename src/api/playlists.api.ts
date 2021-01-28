import axios from "axios"

import { IPlaylist } from "../interfaces/list/IPlaylist"

import { IP } from "../env"

export const playlistsApi = () => {
    const api = axios.create({
        baseURL: IP
    })

    return {
        playlists: async (index: number): Promise<Array<IPlaylist>> => (await api.get(`/api/video/playlists/${index}`)).data
    }
}

