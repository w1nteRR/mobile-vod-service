import React, { FC } from 'react'
import { Button } from '../../components/common/styled/buttons/buttons.shared'

import { Background } from '../../components/common/utils/layout'
import { TextT } from '../../components/common/utils/typography'
import { Header } from '../../components/shared/Header'
import { useAuth } from '../../hooks/auth/useAuth'


export const Profile: FC = () => {
    
    const { logout } = useAuth()

    return (
        <Background>
            <Header />
            <TextT>Profile</TextT>
            <Button text='Clean auth' m='20px 0' bgColor='primary' p='50px' onPress={() => logout()}  />
        </Background>
    )
}