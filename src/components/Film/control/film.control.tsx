import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../../common/utils/layout'
import { Button } from '../../common/styled/buttons/buttons.shared'

import { StatusControl } from './status.control'

interface IControlProps {
    filmId: string
    isSerial: boolean
    name: string
}

export const Control = memo<IControlProps>(({
    filmId,
    isSerial,
    name
}) => {

    const navigation = useNavigation()

    return (
        <Container justify='space-between' w='90%' m='40px 20px'>
            <Container w='35%' justify='flex-start'>
                <StatusControl filmId={filmId} />
                {
                    isSerial
                    &&
                    <Button
                        iconName={false ? 'heart' : 'heart-outline'}
                        iconColor='#FD73AD'
                        iconSize={20}
                        {...btn}
                    />
                }
            </Container>
            <Button
                bgColor='primary'
                iconName='play'
                h='50px'
                w='220px'
                text='Watch now'
                brRadius='10px'
                justify='space-around'
                iconSize={30}
                onPress={() => navigation.navigate('Watch', {
                    screen: 'Watch',
                    params: {
                        filmId,
                        name
                    }
                })}
            />
        </Container>
    )
})

const btn = {
    h: '50px',
    w: '50px',
    brRadius: '10px',
    bgColor: 'dark',
    m: '0 10px 0 0'
}