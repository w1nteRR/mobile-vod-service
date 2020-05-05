import React from 'react'
import { View } from 'react-native'

import { ScrollViewContainer, TagContainer, RatingText } from '../Film.styles'
import { TitleContainer } from '../../FilmSwiper/FilmSwiper.styles'

const AboutContainer = ({ genr, year, duration }) => {
    return (
        <ScrollViewContainer>
            <TitleContainer>About</TitleContainer>
            <View style={{display: "flex", flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
            {
                genr.map(options => (
                <TagContainer key={options}>
                    <RatingText textColor='silver'>{options}</RatingText>
                </TagContainer>
                ))
            }
            <TagContainer>
                    <RatingText textColor='silver'>{year}</RatingText>
            </TagContainer>
            <TagContainer>
                <RatingText textColor='silver'>{duration}</RatingText>
            </TagContainer>
            </View>
        </ScrollViewContainer>
    )
}

export default AboutContainer