import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

import { Text } from '../styled/typography'
import { RatingContext } from '../../reducers/Rating'
import { Container } from '../styled/screens'
import { Button } from '../shared/Button'

import { IMDB } from '../styled/colors'

export const HiddenView = ({ _id, img }) => {

    const navigation = useNavigation()
    const [state] = useContext(RatingContext)

    return (
        <Container bgColor='#000' direction='column'>
            <Container justify='space-between' p='20px'>
                <Button 
                    text='watch' 
                    type='primary' 
                    w='75px' 
                    p='10px' 
                    iconName='play'
                    iconColor='#fff'
                />
                <Container w='100px'>
                    <Container direction='column'>
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
                    <Container direction='column'>
                        <Text size='13px' color='green' weight='bold' uppercase m='5px'>M</Text>
                        <Text size='14px' color='green' weight='bold'>{state.metascore}%</Text>
                    </Container>
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
        </Container>
    )
}
