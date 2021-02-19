import React, { FC, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { ScrollContainer } from '../../Film/scrollviews/Scroll.container'

import { WatchlistList } from './watchlist.list'
import { WatchlistError } from './watchlist.error'

import { fetchWatchlist } from '../../../redux/watchlist/actions'
import { getWatchlist } from '../../../redux/watchlist/selectors'

export const Watchlist: FC = () => {

  const dispatch = useDispatch()
  const watchlist = useSelector(getWatchlist)

  useFocusEffect(useCallback(() => {
    let isActive = true

    const fetchlist = async () => {
      if (isActive) {
        dispatch(fetchWatchlist())
      }
    }

    fetchlist()

    return () => {
      isActive = false
    }
  }, []))

  if(!watchlist.length) return <WatchlistError />

  return (
    <>
      <ScrollContainer title='Your watchlist' />
      <WatchlistList watchlist={watchlist} />
    </>
  )
}