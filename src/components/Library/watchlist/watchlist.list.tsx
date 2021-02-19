import React, { memo } from 'react'
import { FlatList } from 'react-native'

import { WatchlistCard } from './watchlist.card'

import { useRedirect } from '../../../hooks/navigation/useRedirect'
import { useWatchlist } from '../../../hooks/library/useWatchlist'

import { IFilmShort } from '../../../interfaces/film/IFilm'

export const WatchlistList = memo<{ watchlist: Array<IFilmShort> }>(({ 
  watchlist
}) => {

  const { redirectToFilmScreen } = useRedirect()
  const { removeFilmFromWatchlist } = useWatchlist()

  return (
    <FlatList 
      data={watchlist}
      renderItem={({ item }) => 
        <WatchlistCard 
          filmId={item._id}
          name={item.name!} 
          img={item.img} 
          onPress={redirectToFilmScreen}
          onDelete={removeFilmFromWatchlist}
        />
      } 
      keyExtractor={(_, index) => index.toString()}
      onEndReachedThreshold={0.01}
      initialNumToRender={4}
    />
  )
})