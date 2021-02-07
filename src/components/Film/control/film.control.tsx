import React, { memo, useState } from 'react'

import { Container } from '../../common/utils/layout'
import { Button } from '../../common/styled/buttons/buttons.shared'

import { StatusControl } from './status.control'

interface IControlProps {
    filmId: string
    isSerial: boolean
}

export const Control = memo<IControlProps>(({
    filmId,
    isSerial
}) => {

    const [isFollow, setIsFollow] = useState(false)

    return (
        <Container justify='space-between' w='90%' m='40px 20px 5px'>
            <Container>
                <StatusControl filmId={filmId} />
                {
                    isSerial
                    &&
                    <Button
                        iconName={isFollow ? 'heart' : 'heart-outline'}
                        iconColor='#FD73AD'
                        iconSize={15}
                        onPress={() => setIsFollow(!isFollow)}
                        {...btn}
                    />
                }
            </Container>
        </Container>
    )
})

const btn = {
    h: '40px',
    w: '40px',
    brRadius: '10px',
    bgColor: 'dark',
    m: '0 10px 0 0'
}