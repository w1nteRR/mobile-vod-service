import { useNavigation } from '@react-navigation/native'
import React, { FC, useState } from 'react'

import { Button } from '../../components/common/styled/buttons/buttons.shared'
import { Input } from '../../components/common/styled/inputs/inputs.shared'
import { MAIN } from '../../components/common/utils/colors'

import { Background, Container } from '../../components/common/utils/layout'
import { Title } from '../../components/common/utils/typography'
import { useAuth } from '../../hooks/auth/useAuth'

export const SignUp: FC = () => {
   
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    const navigation = useNavigation()

    const { signup } = useAuth()
    
    const _onSignUpClick = async () => {
        try {

            await signup({ email, password, confirmPassword, username })
            navigation.goBack()

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Background>
            <Container p='30px' justify='flex-start'>
                <Title>Sign Up</Title>
            </Container>
            <Container h='80%' direction='column'>
                <Container bgColor={MAIN} p='10px' m='30px' w='90%' style={{ borderRadius: 10 }}>
                    <Input 
                        placeholder='Email' 
                        change={event => setEmail(event.nativeEvent.text)}
                    />
                </Container>
                <Container bgColor={MAIN} p='10px' m='30px' w='90%' style={{ borderRadius: 10 }}>
                    <Input 
                        placeholder='Username'
                        change={event => setUsername(event.nativeEvent.text)} 
                    />
                </Container>
                <Container bgColor={MAIN} p='10px' m='30px' w='90%' style={{ borderRadius: 10 }}>
                    <Input 
                        placeholder='Password'
                        change={event => setPassword(event.nativeEvent.text)} 
                    />
                </Container>
                <Container bgColor={MAIN} p='10px' m='30px' w='90%' style={{ borderRadius: 10 }}>
                    <Input 
                        placeholder='Confirm password'
                        change={event => setConfirmPassword(event.nativeEvent.text)} 
                    />
                </Container>
            </Container>
            <Container justify='space-around'>
                    <Button 
                        text='Back' 
                        bgColor='' 
                        h='40px' 
                        w='130px' 
                        brRadius='5px' 
                        onPress={() => navigation.goBack()}
                    />
                    <Button 
                        text='Sign Up' 
                        bgColor='primary' 
                        h='40px' 
                        w='130px' 
                        brRadius='5px' 
                        onPress={_onSignUpClick}
                    />
                </Container>
        </Background>
    )
}