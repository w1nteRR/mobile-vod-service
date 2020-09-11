import React, { FC } from 'react'

import { Container } from '../../common/utils/layout'
import { Title } from '../../common/utils/typography'

interface IScrollContainerProps {
    title: string
}

export const ScrollContainer: FC<IScrollContainerProps> = ({ 
    title, 
    children 
}) =>
    <Container direction='column' m='50px 0'>
        <Container justify='flex-start' m='20px 0'>
            <Title>{title}</Title>
        </Container>
        {children}
    </Container>