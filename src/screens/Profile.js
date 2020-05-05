import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Background, Title, Header } from '../components/shared/screens'
import SettingsBtnWrapper  from '../components/modals/Player/Settings.button'

import { AuthContext } from '../context'

const Profile = () => {
    const navigation = useNavigation()

    const { userId, logout, ip } = useContext(AuthContext)
    const [user, setUser] = useState({}) || ''
    
    useEffect(() => {
       const getUser = async () => {
            try {
                const res = await axios.get(`http://${ip}:8000/user/${userId}`)
                setUser(res.data)
            } catch (err) {
                console.log(err)
            }
       }
       getUser()
    }, [ip])

    return (
        <Background>
            <Header>
                <Title fontSize='30px'>Profile</Title>
                <Title fontSize='15px'>{user.username}</Title>
            </Header>
            <View style={{ 
                width: '100%', 
                height: '60%', 
                marginTop: '20%'
            }}>
                <SettingsBtnWrapper 
                    buttonText='activity'
                    iconName='history'
                    onPress={() => navigation.navigate('History')} 
                />
                <SettingsBtnWrapper 
                    buttonText='notifications'
                    iconName='bell'
                    onPress={() => navigation.navigate('Notifications')} 
                />
                <SettingsBtnWrapper 
                    buttonText='downloads'
                    iconName='download'
                    onPress={() => navigation.navigate('Downloads')} 

                />
                <SettingsBtnWrapper
                    buttonText='memberships'
                    iconName='currency-usd' 
                    onPress={() => navigation.navigate('Membership')} 
                />
                <SettingsBtnWrapper 
                    buttonText='settings'
                    iconName='settings' 
                    onPress={() => navigation.navigate('Settings')} 
                />
                <SettingsBtnWrapper 
                    buttonText='help'
                    iconName='help-circle' 
                    onPress={() => navigation.navigate('Help')} 
                />
            </View>
            <View style={{ 
                width: '100%', 
                height: '20%', 
                marginTop: '20%'
            }}>
                <SettingsBtnWrapper 
                    buttonText='exit' 
                    iconName='exit-to-app'
                    onPress={logout}
                />
            </View>
        </Background>
    )
}

export default Profile