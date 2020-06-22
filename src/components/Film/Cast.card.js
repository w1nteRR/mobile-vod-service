import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Text } from '../styled/typography'
import { Container } from '../styled/screens'

import { IP } from '../../env'

export const CastCard = ({ item }) => {
    return (
        <TouchableOpacity
            activeOpacity={1} 
            onPress={() => navigation.navigate('Film', {
                itemId: item._id
            })}
            style={{width: '80%', height: 250}}
        >
            <Image 
                source={{uri: `${IP}${item.films.img}`}}
                style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: 5
                }} 
            />
            <View style={{
                width: '100%',
                height: 120,
                position: 'absolute',
                bottom: 0
            }}>
                <LinearGradient 
                    colors={['rgba(0, 0, 0, 0) 0%', 'rgba(0, 0, 0, 0.68) 43.23%', '#000']} 
                    style={{
                        flex: 1,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}
                >
                    <Container 
                        direction='column'
                        m='10px'
                        style={{
                            position: 'absolute',
                            bottom: 0
                        }}
                    >
                        <Text 
                            color='#fff'
                            size='12px'
                            m='5px'
                        >
                            {item.films.actorRole}
                        </Text>
                        <Text 
                            color='silver'
                            size='12px'
                        >
                            {item.actorName}
                        </Text>
                    </Container>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}
