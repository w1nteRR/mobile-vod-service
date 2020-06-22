import React, { useState, useContext } from 'react'
import axios from 'axios'
import { View } from 'react-native'

import { Input } from '../../components/shared/inputs'
import { Background, Header, Title } from '../../components/shared/screens'
import SettingsBtnWrapper from '../../components/modals/Player/Settings.button'

import { AuthContext } from '../../context'

import { IP } from '../../env'

const Login = () => {
    
    const auth = useContext(AuthContext)

    const [form, setForm] = useState({
        email: null,
        password: null,
    })
 
    const inputHandler = (name, value) => {
        setForm({ ...form, [name]: value })
    }

    const doLogin = async () => {
        try {
            const res = await axios.post(`${IP}/auth/signin`, {...form})
            auth.login(res.data.token, res.data.userId)
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <Background>  
            <Header>
                <Title>Login</Title>
            </Header>
            <View style={{ margin: 20 }}>
                <Input 
                    placeholder='Email'
                    placeholderTextColor='silver'
                    value={form.username}
                    onChangeText={(txt) => inputHandler('email', txt)}
                />
            </View>
            <View style={{ margin: 20 }}>
                <Input 
                    placeholder='Password' 
                    placeholderTextColor='silver'
                    value={form.password}
                    onChangeText={(txt) => inputHandler('password', txt)}
                />
            </View>
            {
                auth.isAuthenticated
                ?   <SettingsBtnWrapper buttonText='logout' onPress={auth.logout} />
                :   <SettingsBtnWrapper buttonText='login' onPress={doLogin} /> 
            }           
        </Background>
    )
}

export default Login