import React, { memo, useEffect, useState } from 'react'

import { Container } from '../../common/utils/layout'

import { ScrollContainer } from '../scrollviews/Scroll.container'
import { RatingCard } from './rating.card'

import { ratingApi } from '../../../api/rating.api'

import { ratingsUri } from '../../../utils/images/ratings.uri'
import { IRatingItem } from '../../../interfaces/rating/IRating'

export const Rating = memo<{ name: string }>(({
  name
}) => {

  const [ratings, setRatings] = useState<Array<IRatingItem>>([])

  useEffect(() => {
    let isActive = true

    const fetchRating = async () => {
      try {

        const { Ratings } = await ratingApi().rating(name)

        if (isActive) {
          setRatings(Ratings)
        }

      } catch (err) {
        console.log(err)
      }
    }

    fetchRating()

    return () => {
      isActive = false
    }
  }, [])

  const ratingsWithImage = ratings.map((rating, index) => ({ ...rating, img: ratingsUri[index] }))

  return (
    <ScrollContainer title='Rating and reviews'>
      <Container p='20px'>
        <Container direction='column'>
          {
            ratingsWithImage.map(i => <RatingCard key={i.Source} Value={i.Value} Source={i.Source} img={i.img} />)
          }
        </Container>
      </Container>
    </ScrollContainer>
  )
})
