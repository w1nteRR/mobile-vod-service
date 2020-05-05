import React from 'react'

import { 
        ScrollViewContainer, 
        FilmInfoWrapper, 
        FilmInfoContainer, 
        FilmInfoRow, 
        SubInfoRow, 
        FilmInfoActiveText,
        FilmInfoText 
    } from '../Film.styles'
import { TitleContainer } from '../../FilmSwiper/FilmSwiper.styles'

const InfoContainer = ({ director, release, country, company, subtitles, audio }) => {
    return (
        <ScrollViewContainer>
            <TitleContainer>Info</TitleContainer>
            <FilmInfoWrapper>
                <FilmInfoContainer>
                    <FilmInfoRow>
                        <SubInfoRow textPosition='flex-start' paddingLeft='10px'>
                            <FilmInfoActiveText>director</FilmInfoActiveText>
                        </SubInfoRow>
                        <SubInfoRow textPosition='center'>
                            <FilmInfoText>{director}</FilmInfoText>
                        </SubInfoRow>
                    </FilmInfoRow>
                    <FilmInfoRow>
                        <SubInfoRow textPosition='flex-start' paddingLeft='10px'>
                            <FilmInfoActiveText>release</FilmInfoActiveText>
                        </SubInfoRow>
                        <SubInfoRow textPosition='center'>
                            <FilmInfoText>{release}</FilmInfoText>
                        </SubInfoRow>
                    </FilmInfoRow>
                    <FilmInfoRow>
                        <SubInfoRow textPosition='flex-start' paddingLeft='10px'>
                            <FilmInfoActiveText>country</FilmInfoActiveText>
                        </SubInfoRow>
                        <SubInfoRow textPosition='center'>
                            <FilmInfoText>{country + ''}</FilmInfoText>
                        </SubInfoRow>
                    </FilmInfoRow>
                </FilmInfoContainer>
                <FilmInfoContainer>
                    <FilmInfoRow>
                        <SubInfoRow textPosition='center' paddingLeft='10px'>
                            <FilmInfoActiveText>audio</FilmInfoActiveText>
                        </SubInfoRow>
                        <SubInfoRow textPosition='flex-end'>
                            <FilmInfoText>{audio + ''}</FilmInfoText>
                        </SubInfoRow>
                    </FilmInfoRow>
                    <FilmInfoRow>
                        <SubInfoRow textPosition='center' paddingLeft='10px'>
                            <FilmInfoActiveText>company</FilmInfoActiveText>
                        </SubInfoRow>
                        <SubInfoRow textPosition='flex-end'>
                            <FilmInfoText>{company}</FilmInfoText>
                        </SubInfoRow>
                    </FilmInfoRow>
                    <FilmInfoRow>
                        <SubInfoRow textPosition='center' paddingLeft='10px'>
                            <FilmInfoActiveText>subtitles</FilmInfoActiveText>
                        </SubInfoRow>
                        <SubInfoRow textPosition='flex-end'>
                            <FilmInfoText>{subtitles + ''}</FilmInfoText>
                        </SubInfoRow>
                    </FilmInfoRow>
                </FilmInfoContainer>
            </FilmInfoWrapper>
        </ScrollViewContainer>
    )
}

export default InfoContainer