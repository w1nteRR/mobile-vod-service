import { useCallback } from "react"
import { useDispatch } from "react-redux"

import { removeFromWatchlist } from "../../redux/watchlist/actions"

export const useWatchlist = () => {

  const dispatch = useDispatch()

  const removeFilmFromWatchlist = useCallback((filmid: string) => {
    dispatch(removeFromWatchlist(filmid))
  }, [])

  return {
    removeFilmFromWatchlist
  }
}