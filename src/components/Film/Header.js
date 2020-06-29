import React from 'react'
import { Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Container } from '../styled/screens'
import { Text } from '../styled/typography'

import { IP } from '../../env'

export const Header = ({ wallpaper, name }) => 
    <Container h='300px'>
        <Image 
            source={{uri: `${IP}${wallpaper}`}}
            style={{
                resizeMode: 'cover',
                width: '100%',
                height: '100%'
            }}
        />
        <Container 
            style={{
                position: 'absolute',
                bottom: 0
            }}
        >
            <LinearGradient
                colors={['rgba(0, 0, 0, 0) 0%', 'rgba(0, 0, 0, 0.68) 43.23%', '#000']} 
                style={{
                    flex: 1,
                    height: 200
                }}
            >
                <Container 
                    h='200px'
                    align='flex-end'
                >
                    <Text size='30px' weight='bold' color='#fff'>{name}</Text>
                </Container>
            </LinearGradient>
        </Container>
    </Container>