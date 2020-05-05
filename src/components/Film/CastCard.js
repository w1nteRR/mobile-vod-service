import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { ActorInfo, ActorRole, ActorName } from './Film.styles'

const CastCard = ({ item }) => {
    return (
        <TouchableOpacity
            activeOpacity={1} 
            onPress={() => navigation.navigate('Film', {
                itemId: item._id
            })}
            style={{width: '80%', height: 250}}
        >
            <Image 
                source={{uri: `http://192.168.1.104:8000${item.films.img}`}}
                style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: 5
                }} 
            />
            <ActorInfo>
            <LinearGradient 
                colors={['rgba(0, 0, 0, 0) 0%', 'rgba(0, 0, 0, 0.68) 43.23%', '#000']} 
                style={{
                    flex: 1,
                    paddingLeft: 10,
                    paddingRight: 10
                }}
            >
            </LinearGradient>
                <ActorRole>{item.films.actorRole}</ActorRole>
                <ActorName>{item.actorName}</ActorName>
            </ActorInfo>
        </TouchableOpacity>
    )
}

export default CastCard