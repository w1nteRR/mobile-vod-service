import React from 'react'

import { Title, Text } from '../../styled/typography'
import { Container } from '../../styled/screens'

export const Storyline = ({ describe }) => 
    <Container direction='column'>
        <Container 
            justify='flex-start'
            p='10px'
        >
            <Title>Storyline</Title>
        </Container>
        <Container>
            <Text 
                color='silver'
                size='12px'
                p='20px'
                style={{
                    lineHeight: 20
                }}
            >
                {describe}
            </Text>
        </Container>
    </Container>