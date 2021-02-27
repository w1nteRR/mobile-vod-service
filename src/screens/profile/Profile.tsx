import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '../../components/common/styled/buttons/buttons.shared'
import { Background, Container } from '../../components/common/utils/layout'

import { HeaderNav } from '../../components/Nav/header.nav'
import { UserProfile } from '../../components/Profile/user.profile'

import { logout } from '../../redux/auth/actions'

export const Profile: FC = () => {
    
    const dispatch = useDispatch()

    return (
        <Background>
            <HeaderNav />
            <UserProfile />
            <Container style={{ position: 'absolute', bottom: 10 }}>
                <Button
                    brRadius='10px' 
                    text='Exit' 
                    bgColor='danger'
                    m='10px auto' 
                    p='25px 0px'
                    w='90%' 
                    onPress={() => dispatch(logout())} 
                />
            </Container>     
        </Background>
    )
}