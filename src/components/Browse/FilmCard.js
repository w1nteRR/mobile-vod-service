import React from 'react'
import styled from 'styled-components/native'

import { Image } from 'react-native'

const FilmCard = ({ item, onPress }) => {


    return (
        <Container
            activeOpacity={1} 
            onPress={onPress}
        >
            <Image 
                source={{uri: `http://192.168.1.104:8000${item.img}`}}
                style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: 3
                }} 
            />
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    width: 100%;
    height: 200px;
    border-radius: 3px;
`

export default FilmCard