import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'

import { BgImgCard } from '../../common/styled/cards/cards.shared'
import { Container } from '../../common/utils/layout'
import { TextT } from '../../common/utils/typography'

interface IResultCardProps {
  onPress?: () => void
  name: string
  image: string
}

export const ResultCard = memo<IResultCardProps>(({
  onPress,
  name,
  image
}) => 
  <TouchableOpacity onPress={onPress} activeOpacity={.9}>
    <Container m='10px' justify='flex-start' p='10px'>
      <BgImgCard img={image} h='30px' width='50px' brRadius={5} />
      <TextT>{name}</TextT>
    </Container>
  </TouchableOpacity>
)