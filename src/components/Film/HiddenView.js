import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

import { FilmName, HiddenContainer, RatingContainer, RatingItem, RatingText } from './Film.styles'

const HiddenView = ({ filmName, _id, img }) => {

    const navigation = useNavigation()

    return (
        <HiddenContainer>
            <FilmName>{filmName}</FilmName>
            <RatingContainer>
                <RatingItem>
                    <RatingText textColor='green'>95%</RatingText>
                    <Icon 
                        size={15} 
                        color="green" 
                        name="thumb-up" 
                    />
                </RatingItem>
                <RatingItem>
                    <RatingText textColor='#DBA506'>8.9</RatingText>
                    <Text style={{ 
                        color: '#DBA506', 
                        fontSize: 10, 
                        fontWeight: 'bold'
                        }}
                    >
                        IMDb
                    </Text>
                </RatingItem>
                <RatingItem>
                    <Icon 
                        size={30} 
                        color="#fff" 
                        name="more-vert" 
                        onPress={() => navigation.navigate('LibraryModal', {
                            filmId: _id,
                            filmImg: img
                            }     
                        )}
                    />
                </RatingItem>
            </RatingContainer>
        </HiddenContainer>
    )
}

export default HiddenView