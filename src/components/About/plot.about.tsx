import React, { FC } from 'react'
import { MAIN } from '../common/utils/colors'
import { Container } from '../common/utils/layout'

import { Describe } from '../common/utils/typography'
import { ScrollContainer } from '../Film/scrollviews/Scroll.container'

export const Plot: FC<{ describe: string }> = ({
    describe
}) =>
    <ScrollContainer title='About'>
        <Container p='20px' style={{ borderRadius: 10 }}>
            <Describe>
                {describe}
            </Describe>
        </Container>
    </ScrollContainer>
