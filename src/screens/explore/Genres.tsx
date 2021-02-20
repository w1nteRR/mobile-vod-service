import React, { FC } from 'react'
import { FlatList } from 'react-native'

import { Background, Container } from '../../components/common/utils/layout'
import { Title } from '../../components/common/utils/typography'
import { GenreCard } from '../../components/Explore/genres/genres.card'

import genres from '../../utils/filters/genres.json'

export const Genres: FC = () => {
  return (
    <Background>
      <FlatList 
        data={genres}
        renderItem={({ item }) => <GenreCard value={item.value} />}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={() => 
          <Container m='10px 0' p='20px' justify='flex-start'>
            <Title>Genres</Title>
          </Container>
        }
      />
    </Background>
  )
}