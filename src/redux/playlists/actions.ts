import { ActionTypes, FETCH_PLAYLISTS, ThunkType } from "./types"

import { playlistsApi } from "../../api/playlists.api"

import { IPlaylist } from "../../interfaces/list/IPlaylist"


const _addPlaylists = (payload: Array<IPlaylist>): ActionTypes => ({
    type: FETCH_PLAYLISTS,
    payload
})


export const fetchPlaylists = (index: number): ThunkType => async dispatch => {
    try {

        const playlists = await playlistsApi().playlists(index)

        dispatch(_addPlaylists(playlists))

    } catch (err) {
        console.log(err)
    }
} 
