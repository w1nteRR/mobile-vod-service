import React, { FC } from 'react'
import { Image } from 'react-native'

import { PRIMARY } from '../common/utils/colors'
import { Container } from '../common/utils/layout'
import { Text } from '../common/utils/typography'

export const UserProfile: FC<{ img: string, username: string }> = ({
    img,
    username
}) => {

    return(
        <Container direction='column' m='40px 0 0'>
            <Image 
                source={{
                    uri: img
                }}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100
                }}
            />
            <Container p='20px' direction='column'>
                <Text size='26px' m='10px 0' color={PRIMARY} weight='bold'>{username}</Text>
            </Container>
        </Container>
    )
}