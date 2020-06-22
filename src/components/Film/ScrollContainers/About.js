import React from 'react'

import { Tag } from '../../shared/Tag'

import { Title } from '../../styled/typography'
import { Container } from '../../styled/screens'

export const About = ({ genr, year, duration }) => 
    <Container direction='column'>
        <Container
            justify='flex-start'
            p='10px'
        >
            <Title>About</Title>
        </Container>
        <Container wrap>
            {
                genr.map(genr => 
                    <Tag key={genr} value={genr} />
                )
            }      
           <Tag value={year} />
           <Tag value={duration} />  
        </Container>
    </Container>