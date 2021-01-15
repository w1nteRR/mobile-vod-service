import { useNavigation } from '@react-navigation/native'
import React, { FC, useState } from 'react'
import { Dimensions } from 'react-native'

import { Button } from '../../components/common/styled/buttons/buttons.shared'
import { Input } from '../../components/common/styled/inputs/inputs.shared'
import { MAIN } from '../../components/common/utils/colors'
import { Background, Container } from '../../components/common/utils/layout'
import { Title, Text } from '../../components/common/utils/typography'

import { useAuth } from '../../hooks/auth/useAuth'

export const SignUp: FC = () => {
   
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    const navigation = useNavigation()

    const { signup } = useAuth()

    const width = Dimensions.get('screen').width - 20
    
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
                <Title>Create account</Title>
            </Container>
            <Container h='70%' direction='column' p='10px'>
                <Container {...inputContainer}>
                    <Input 
                        placeholder='Email' 
                        change={event => setEmail(event.nativeEvent.text)}
                    />
                </Container>
                <Container {...inputContainer}>
                    <Input 
                        placeholder='Username'
                        change={event => setUsername(event.nativeEvent.text)} 
                    />
                </Container>
                <Container {...inputContainer}>
                    <Input 
                        placeholder='Password'
                        change={event => setPassword(event.nativeEvent.text)} 
                    />
                </Container>
                <Container {...inputContainer}>
                    <Input 
                        placeholder='Confirm password'
                        change={event => setConfirmPassword(event.nativeEvent.text)} 
                    />
                </Container>
            </Container>
            <Container>
                <Button 
                    text='Create Account' 
                    bgColor='primary' 
                    h='50px' 
                    w={width.toFixed() + 'px'} 
                    brRadius='10px' 
                    onPress={_onSignUpClick}
                />
            </Container>
            <Container m='20px 0'>
                <Text size='10px'>Already registered? <Text onPress={() => navigation.navigate('SignIn')} weight='bold' size='13px'> Sign In</Text></Text>
            </Container>
        </Background>
    )
}

const inputContainer = {
    bgColor: MAIN,
    p: '10px',
    m: '30px',
    style: {
        borderRadius: 10
    }
}