import React, { FC } from 'react'

import { ScrollContainer } from './Scroll.container'

import { Container } from '../../common/utils/layout'
import { Tag } from '../../common/styled/shared/shared'
import { Text, Describe } from '../../common/utils/typography'

interface IAboutProps {
    genr: Array<string>
    duration: string
    year: number
    describe: string
}

export const About: FC<IAboutProps> = ({ 
    genr,
    duration,
    year,
    describe
}) => 
    <ScrollContainer title='About'>
        <Container wrap='wrap'>
            <Container w='90%' m='0 0 10px'>
                <Describe>{describe}</Describe>
            </Container>
            {
                genr.map((genr, index) => 
                    <Tag key={index}>
                        <Text size='10px'>{genr}</Text>
                    </Tag>
                )
            }
            <Tag>
                <Text size='10px'>{duration}</Text>
            </Tag>
            <Tag>
                <Text size='10px'>{year}</Text>
            </Tag>
        </Container>
    </ScrollContainer>