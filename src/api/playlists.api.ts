import axios from "axios"

import { IPlaylist } from "../interfaces/list/IPlaylist"

import { PLAYLIST_CLOUD_RUN } from "../env"

export const playlistsApi = () => {
    const api = axios.create({
        baseURL: PLAYLIST_CLOUD_RUN
    })

    return {
        playlists: async (index: number): Promise<Array<IPlaylist>> => (await api.get(`/playlists/?skip=${index}`)).data
    }
}

