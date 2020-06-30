import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

import { Text } from '../styled/typography'
import { Container } from '../styled/screens'
import { Button } from '../shared/Button'

import { IMDB } from '../styled/colors'
import { RatingDisplay } from '../Rating/Rating.display'

import { RatingContext } from '../../reducers/Rating'

export const HiddenView = ({ filmId }) => {

    const navigation = useNavigation()
    const [state] = useContext(RatingContext)

    return (
        <Container bgColor='#000' justify='space-between' p='10px'>
            <Button 
                text='watch' 
                type='primary' 
                w='75px' 
                p='10px' 
                iconName='play'
                iconColor='#fff'
            />
            <Container w='250px'>
                <Container direction='column' w='50px'>
                    <Text 
                        size='13px' 
                        color={IMDB}
                        weight='bold'
                        m='5px'
                    >
                        IMDb
                    </Text>
                    <Text size='14px' color={IMDB}>{state.imdb}</Text>
                </Container>
                <Container direction='column' w='50px'>
                        <Text size='13px' color='green' weight='bold' uppercase m='5px'>M</Text>
                        <Text size='14px' color='green' weight='bold'>{state.metascore}%</Text>
                </Container>
               <RatingDisplay  filmId={filmId} />
            </Container>
            <Icon 
                size={30} 
                color="#fff" 
                name="more-vert" 
                onPress={() => navigation.navigate('LibraryModal', {
                    filmId: _id,
                    filmImg: img,
                    ratingType: state.ratingType
                    }     
                )}
            />
        </Container>
    )
}