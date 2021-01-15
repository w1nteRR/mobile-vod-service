import React, { FC, ReactNode } from 'react'

import { Container } from '../../common/utils/layout'
import { Title, Text } from '../../common/utils/typography'

interface IScrollContainerProps {
    title: string
    right?: ReactNode
}

export const ScrollContainer: FC<IScrollContainerProps> = ({ 
    title, 
    right,
    children 
}) =>
    <Container direction='column' bgColor='black'>
        <Container justify='space-between' m='20px 0' p='0px 20px'>
            <Title>{title}</Title>
            {right}
        </Container>
        {children}
    </Container>