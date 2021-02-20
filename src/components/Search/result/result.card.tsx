import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'

import { Container } from '../../common/utils/layout'
import { TextT } from '../../common/utils/typography'

interface IResultCardProps {
  onPress: (id: string) => void
  name: string
  _id: string
}

export const ResultCard = memo<IResultCardProps>(({
  onPress,
  name,
  _id
}) => 
  <TouchableOpacity onPress={() => onPress(_id)} activeOpacity={.9}>
    <Container m='10px' justify='flex-start' p='20px'>
      <TextT>{name}</TextT>
    </Container>
  </TouchableOpacity>
)