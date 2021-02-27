import React, { memo } from 'react'
import { Dimensions, TouchableOpacity, Image } from 'react-native'

import { IFilmShort } from '../../../interfaces/film/IFilm'
import { IP } from '../../../env'

interface IFilmCardProps extends IFilmShort {
  onPress: (id: string) => void
}

export const FilmCard = memo<IFilmCardProps>(({
  _id,
  img,
  onPress
}) => {

  const { width } = Dimensions.get('screen')

  return (
    <TouchableOpacity onPress={() => onPress(_id)} activeOpacity={.8}>
      <Image 
        source={{ uri: `${IP}${img}` }} 
        style={{ 
          width: width - 90,
          height: 175,
          borderRadius: 10,
          margin: 10 
        }} 
      />
    </TouchableOpacity>
  )
})