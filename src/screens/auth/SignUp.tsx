import { useNavigation } from '@react-navigation/native'
import React, { FC, useCallback, useState } from 'react'
import { Dimensions } from 'react-native'

import { Button } from '../../components/common/styled/buttons/buttons.shared'
import { Input } from '../../components/common/styled/inputs/Input'
import { MAIN } from '../../components/common/utils/colors'
import { Background, Container } from '../../components/common/utils/layout'
import { Title, Text } from '../../components/common/utils/typography'

export const SignUp: FC = () => {
   
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    const navigation = useNavigation()

    const width = Dimensions.get('screen').width - 20

    return (
        <Background>
            <Container p='30px' justify='flex-start'>
                <Title>Create account</Title>
            </Container>
            <Container h='70%' direction='column' p='10px'>
                <Container {...inputContainer}>
                    <Input 
                        placeholder='Email' 
                        onChangeText={useCallback(value => setEmail(value), [])}
                    />
                </Container>
                <Container {...inputContainer}>
                    <Input 
                        placeholder='Username'
                        onChangeText={useCallback(value => setUsername(value), [])}
                    />
                </Container>
                <Container {...inputContainer}>
                    <Input 
                        placeholder='Password'
                        onChangeText={useCallback(value => setPassword(value), [])}
                    />
                </Container>
                <Container {...inputContainer}>
                    <Input 
                        placeholder='Confirm password'
                        onChangeText={useCallback(value => setConfirmPassword(value), [])}
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
                />
            </Container>
            <Container m='20px 0' p='20px'> 
                <Text 
                    onPress={() => navigation.navigate('SignIn')} 
                    weight='bold' 
                    size='13px'
                >
                    Sign In
                </Text>
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