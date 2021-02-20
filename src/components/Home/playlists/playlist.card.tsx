import React, { memo } from 'react'
import { Dimensions, Image, TouchableOpacity } from 'react-native'
import { IP } from '../../../env'

interface IPlaylistCardProps {
  img: string
  _id: string
  onPress: (id: string) => void
}

export const PlaylistCard = memo<IPlaylistCardProps>(({
  img,
  _id,
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