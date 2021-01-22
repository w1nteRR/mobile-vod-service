import { useNavigation } from '@react-navigation/native'
import React, { FC, useCallback, useState } from 'react'
import { Dimensions } from 'react-native'

import { Button } from '../../components/common/styled/buttons/buttons.shared'
import { Input } from '../../components/common/styled/inputs/Input'
import { MAIN } from '../../components/common/utils/colors'

import { Background, Container } from '../../components/common/utils/layout'
import { Text, Title } from '../../components/common/utils/typography'

import { useAuth } from '../../hooks/auth/useAuth'

export const SignIn: FC = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()
    const { signInWithPassword, signInWithGoogle } = useAuth()

    const width = Dimensions.get('screen').width - 20

    return (
        <Background>
            <Container p='30px' justify='flex-start'>
                <Title>Sign In</Title>
            </Container>
            <Container h='50%' direction='column' p='10px'>
                <Container {...inputContainer}>
                    <Input 
                        placeholder='Email' 
                        onChangeText={useCallback(value => setEmail(value), [])}
                    />
                </Container>
                <Container {...inputContainer}>
                    <Input 
                        placeholder='Password'
                        onChangeText={useCallback(value => setPassword(value), [])}
                    />
                </Container>
                    <Button 
                        text='Sign In' 
                        bgColor='primary' 
                        h='50px'
                        w={width.toFixed() + 'px'}
                        brRadius='10px' 
                        onPress={() => signInWithPassword(email, password)}
                    />
                    <Container m='20px 0'>
                        <Text size='10px'>Not registered yet? <Text onPress={() => navigation.navigate('SignUp')} weight='bold' size='13px'> Create Account</Text></Text>
                    </Container>
            </Container>
            <Container>
                <Title>Or continue with</Title>
            </Container>
            <Container m='50px 0'>
                <Button 
                    iconName='google'
                    iconSize={20} 
                    {...smBtn}
                    onPress={() => signInWithGoogle()}
                />
                <Button 
                    iconName='facebook'
                    iconSize={20} 
                    iconColor='blue'
                    {...smBtn}
                />
            </Container>
            <Container 
                style={{ 
                    position: "absolute", 
                    bottom: 20
                }} 
            >
                <Button 
                    bgColor=''
                    h='50px'
                    w={width.toFixed() + 'px'} 
                    text='Go as guest' 
                    brRadius='10px'
                    onPress={() => navigation.navigate('Main')} 
                />
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

const smBtn = {
    bgColor: 'dark', 
    w: '50px',
    h: '50px',
    m: '10px',
    brRadius: '10px'
}