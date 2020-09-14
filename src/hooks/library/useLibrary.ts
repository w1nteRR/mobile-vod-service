import { useSelector } from "react-redux"

import { watchLaterApi } from "../../api/library.api"

import { RootState } from "../../redux/rootReducer"

export const useLibrary = (filmId: string) => {

    const token = useSelector((state: RootState) => state.auth.token)

    const addToWatchLater = async (callback: () => void) => {
        try {

            await watchLaterApi.add(filmId, token)
            callback()

        } catch (err) {
            throw err
        }
    }
    
    const removeFromWatchLater = async (callback: () => void) => {
        try {

            await watchLaterApi.remove(filmId, token)
            callback()

        } catch (err) {
            throw err
        }
    }

    return {
       addToWatchLater,
       removeFromWatchLater
    }
}