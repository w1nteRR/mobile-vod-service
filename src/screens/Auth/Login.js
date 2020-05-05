import React, { useState, useContext } from 'react'
import axios from 'axios'
import { View } from 'react-native'

import { Input } from '../../components/shared/inputs'
import { Background, Header, Title } from '../../components/shared/screens'
import SettingsBtnWrapper  from '../../components/modals/Player/Settings.button'

import { AuthContext } from '../../context'

const Login = () => {
    
    const auth = useContext(AuthContext)

    const [form, setForm] = useState({
        username: null,
        password: null,
    })
 
    const inputHandler = (name, value) => {
        setForm({ ...form, [name]: value })
    }

    const doLogin = async () => {
        try {
            const res = await axios.post(`http://${ip}:8000/login`, {...form})
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
                    placeholder='Username'
                    placeholderTextColor='silver'
                    value={form.username}
                    onChangeText={(txt) => inputHandler('username', txt)}
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