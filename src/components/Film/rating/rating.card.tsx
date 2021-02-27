import React, { memo } from "react"
import { Image } from 'react-native'

import { Container } from "../../common/utils/layout"
import { Text, TextT } from '../../common/utils/typography'

import { IRatingItem } from "../../../interfaces/rating/IRating"

interface IRatingCardProps extends IRatingItem {
  img: string
}

export const RatingCard = memo<IRatingCardProps>(({
  Value,
  Source,
  img
}) =>
  <Container
    m='10px 0'
    p='10px'
    justify='space-between'
  >
    <Image
      source={{ uri: img }}
      style={{
        width: 35,
        height: 35,
        borderRadius: 100
      }}
    />
    <Container justify='space-between' w='250px'>
      <TextT>{Source}</TextT>
      <Text weight='bold'>
        {Value}
      </Text>
    </Container>
  </Container>
)