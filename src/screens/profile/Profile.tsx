import React, { FC, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import type { UserInfo } from 'react-native-auth0'
import { useDispatch } from 'react-redux'

import { Button } from '../../components/common/styled/buttons/buttons.shared'
import { Background, Container } from '../../components/common/utils/layout'
import { Title } from '../../components/common/utils/typography'
import { UserProfile } from '../../components/profile/user.profile'

import { useAuth } from '../../hooks/auth/useAuth'

export const Profile: FC = () => {
    
    const { logout, getUser } = useAuth()
    const [user, setUser] = useState<UserInfo | undefined>({} as UserInfo)

    useEffect(() => {
        (async () => {
            try {

                console.log('render')
                const user = await getUser()
                
                setUser(user)

            } catch (err) {
                
            }
        })()
    }, [])

    if(!user) {
        return (
            <Container>
                <Title>wrong token</Title>
                <Button text='Exit' bgColor='danger' onPress={() => logout()}/>
            </Container>
        )
    }

    return (
        <Background>           
            <ScrollView>
                <UserProfile 
                    img={user!.picture}
                    username={user!.nickname} 
                />
            </ScrollView>
            <Button
                brRadius='10px' 
                text='Exit' 
                bgColor='danger'
                m='10px auto' 
                p='25px 0px'
                w='90%' 
                onPress={() => logout()} 
            />           
        </Background>
    )
}