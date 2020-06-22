import React from 'react'
import styled from 'styled-components'

import { Title, Text } from '../../styled/typography'
import { Container } from '../../styled/screens'

const ActiveText = styled(Text)`
    font-weight: bold; 
    color: #fff;
    margin: 5px;
    font-size: 12px;
    text-transform: uppercase;
`

const SubText = styled(Text)`
    color: silver;
    font-size: 12px;
`

export const Info = ({ director, release, country, company, subtitles, audio }) => 
    <Container 
        h='300px' 
        direction='column' 
        justify='flex-start'
    >
        <Container 
            justify='flex-start' 
            p='10px' 
        >
            <Title>Info</Title>
        </Container>
        <Container justify='space-between'>
            <Container 
                h='200px' 
                w='50%' 
                direction='column'
                justify='space-between'
            >
                <Container direction='column'>
                    <ActiveText>Director</ActiveText>
                    <SubText>{director}</SubText>
                </Container>
                <Container direction='column'>
                    <ActiveText>Release</ActiveText>
                    <SubText>{release}</SubText>
                </Container>
                <Container direction='column'>
                    <ActiveText>Country</ActiveText>
                    <SubText>{country}</SubText>
                </Container>
            </Container>
            <Container 
                h='200px' 
                w='50%' 
                direction='column'
                justify='space-between'
            >
                <Container direction='column'>
                    <ActiveText>Audio</ActiveText>
                    <SubText>{audio + ''}</SubText>
                </Container>
                <Container direction='column'>
                    <ActiveText>Company</ActiveText>
                    <SubText>{company}</SubText>
                </Container>
                <Container direction='column'>
                    <ActiveText>Subtitles</ActiveText>
                    <SubText>{subtitles + ''}</SubText>
                </Container>
            </Container>
        </Container>
    </Container>
      
