import React, { memo, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import { ScrollContainer } from '../scrollviews/Scroll.container'
import { FilmCard } from '../../common/cards/film.card'

import { IFilmShort } from '../../../interfaces/film/IFilm'

import { useRedirect } from '../../../hooks/navigation/useRedirect'
import { similarApi } from '../../../api/similar.api'


export const Similar = memo<{ tags: Array<string>, filmdId: string }>(({
  tags,
  filmdId
}) => {

  const [similar, setSimilar] = useState<Array<IFilmShort>>([])

  const { pushToFilmScreen } = useRedirect()

  useEffect(() => {
    if (!tags.length) return

    const fetchSimilar = async () => {
      const films = await similarApi().tags(tags)
      const filtred = films.filter(i => i._id !== filmdId)

      setSimilar(filtred)
    }

    fetchSimilar()
  }, [])

  if (!similar.length) return null

  return (
    <ScrollContainer title='Similar'>
      <ScrollView horizontal={true}>
        {
          similar.map(film =>
            <FilmCard key={film._id} _id={film._id} img={film.img} onPress={pushToFilmScreen} />
          )
        }
      </ScrollView>
    </ScrollContainer>
  )
})
