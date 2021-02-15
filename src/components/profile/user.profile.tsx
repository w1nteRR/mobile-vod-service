import React, { FC } from 'react'
import { Image } from 'react-native'
import { shallowEqual, useSelector } from 'react-redux'

import { Container } from '../common/utils/layout'
import { TextT } from '../common/utils/typography'

import { Button } from '../common/styled/buttons/buttons.shared'

import { getUser } from '../../redux/auth/selectors'

export const UserProfile: FC = () => {

    const { picture, name } = useSelector(getUser, shallowEqual)

    return (
        <Container justify='space-around' m='0 auto'>
            <Image 
                source={{
                    uri: picture
                }}
                style={imgStyle}
            />
            <TextT>{name}</TextT>
            <Button iconName='arrow-right' brRadius='10px' bgColor='' w='35px' h='35px' />
        </Container>
    )
}

const imgStyle = {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15
}