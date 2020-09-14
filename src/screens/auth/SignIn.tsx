import { useNavigation } from '@react-navigation/native'
import React, { FC, useState } from 'react'

import { Button } from '../../components/common/styled/buttons/buttons.shared'
import { Input } from '../../components/common/styled/inputs/inputs.shared'
import { MAIN } from '../../components/common/utils/colors'

import { Background, Container } from '../../components/common/utils/layout'
import { Title } from '../../components/common/utils/typography'

import { useAuth } from '../../hooks/auth/useAuth'

export const SignIn: FC = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()
    const { signin } = useAuth()

    const _onSignInPress = async () => {

        if(!email.trim().length || !password.trim().length) return

        try {

            await signin({ email, password })
            navigation.navigate('Main')

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Background>
            <Container p='30px' justify='flex-start'>
                <Title>Sign In</Title>
            </Container>
            <Container h='50%' direction='column'>
                <Container bgColor={MAIN} p='10px' m='30px' w='90%' style={{ borderRadius: 10 }}>
                    <Input 
                        placeholder='Email' 
                        change={event => setEmail(event.nativeEvent.text)}
                    />
                </Container>
                <Container bgColor={MAIN} p='10px' m='30px' w='90%' style={{ borderRadius: 10 }}>
                    <Input 
                        placeholder='Password'
                        change={event => setPassword(event.nativeEvent.text)} 
                    />
                </Container>
                <Container justify='space-around'>
                    <Button 
                        text='Sign Up' 
                        bgColor='' 
                        h='40px' 
                        w='130px' 
                        brRadius='5px' 
                        onPress={() => navigation.navigate('SignUp')}
                    />
                    <Button 
                        text='Login' 
                        bgColor='primary' 
                        h='40px' 
                        w='130px' 
                        brRadius='5px' 
                        onPress={() => _onSignInPress()}
                    />
                </Container>
            </Container>
            <Container 
                style={{ 
                    position: "absolute", 
                    bottom: 0 
                }} 
                bgColor='#121212' 
                h='70px'
            >
                <Button 
                    bgColor='' 
                    text='Continue as guest' 
                    onPress={() => navigation.navigate('Main')} 
                />
            </Container>
        </Background>
    )
}