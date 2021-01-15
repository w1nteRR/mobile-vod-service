import { useNavigation } from '@react-navigation/native'
import React, { FC, useEffect, useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import type { UserInfo } from 'react-native-auth0'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import { NoAuth } from '../../components/common/styled/alerts/alerts.shared'

import { Button } from '../../components/common/styled/buttons/buttons.shared'
import { MAIN, DANGER, PRIMARY } from '../../components/common/utils/colors'
import { Background, Container } from '../../components/common/utils/layout'
import { TextT, Text, Title } from '../../components/common/utils/typography'
import { ScrollContainer } from '../../components/Film/scrollviews/Scroll.container'
import { UserProfile } from '../../components/profile/user.profile'

import { useAuth } from '../../hooks/auth/useAuth'
import { setAuth } from '../../redux/auth/actions'

export const Profile: FC = () => {
    
    const { logout, getUser } = useAuth()
    const [user, setUser] = useState<UserInfo | undefined>({} as UserInfo)
    const dispatch = useDispatch()

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
            <Container><Title>token</Title></Container>
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