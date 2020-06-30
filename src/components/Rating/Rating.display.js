import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Container } from '../styled/screens'
import { Text } from '../styled/typography'
import { DANGER, PRIMARY } from '../styled/colors'

import { useRating } from '../../hooks/rating/useRating'

import { RatingContext } from '../../reducers/Rating'

export const RatingDisplay = ({ filmId }) => {

    const [state] = useContext(RatingContext)

    const { addToLiked, removeFromLiked, addToDisliked, removeFromDisliked } = useRating(filmId)

    return (
        <>
        <Container w='50px' direction='column'>
            <Text size='13px' color={PRIMARY} weight='bold' uppercase m='5px'>{state.likes}</Text>
            <Icon 
                name={state.ratingType === 'like' ? 'thumb-up' : 'thumb-up-outline' } 
                color='#fff' 
                size={20} 
                onPress={
                    state.ratingType === 'like' 
                    ? () => removeFromLiked() 
                    : () => addToLiked()
                }
            />
        </Container>
        <Container w='50px' direction='column'>
            <Text size='13px' color={DANGER} weight='bold' uppercase m='5px'>{state.dislikes}</Text>
            <Icon 
                name={state.ratingType === 'dislike' ? 'thumb-down' : 'thumb-down-outline' }
                color='#fff' 
                size={20} 
                onPress={
                    state.ratingType === 'dislike' 
                    ? () => removeFromDisliked() 
                    : () => addToDisliked()
                }
            />
        </Container>
        </>
    )
}