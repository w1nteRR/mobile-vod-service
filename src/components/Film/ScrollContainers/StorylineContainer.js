import React from 'react'

import { ScrollViewContainer, DescribeText } from '../Film.styles'
import { TitleContainer } from '../../FilmSwiper/FilmSwiper.styles'
import { View } from 'react-native'

const StorylineContainer = ({ describe }) => {
    return (
        <ScrollViewContainer>
            <TitleContainer>Storyline</TitleContainer>
            <View style={
                {
                    width: '75%', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    display: 'flex'
                }
            }
            >
                <DescribeText>
                    {describe}
                </DescribeText>
            </View>
        </ScrollViewContainer>
    )
}

export default StorylineContainer