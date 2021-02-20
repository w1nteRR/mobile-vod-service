import React, { FC  } from 'react'
import { View, Dimensions, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Container } from '../../common/utils/layout'
import { Text, TextT } from '../../common/utils/typography'

import { IFilmTrend } from '../../../interfaces/film/IFilm'

const { width } = Dimensions.get('screen')

interface ITrendCardProps extends IFilmTrend {
    onPress: (id: string) => void
}

export const TrendCard: FC<ITrendCardProps> = ({
    wallpaper,
    name,
    genr,
    describe,
    _id,
    onPress
}) => {

    return (
        <TouchableOpacity onPress={() => onPress(_id!)} activeOpacity={1}>
        <Container
            direction='column'
            w={width + 'px'}
            h='450px'
        >
            <Image 
                source={{ uri: wallpaper }}
                resizeMethod='resize'
                resizeMode='cover' 
                style={{
                    width: width - 20,
                    height: '100%',
                    borderRadius: 10    
                }} 
            />
            <Container  
                style={{
                    position: 'absolute',
                    top: 0,
                    height: '100%'
                }}
            >
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.2) 0%', 'rgba(0, 0, 0, 0.6) 33.23%', 'black']} 
                    style={{
                        flex: 1,
                        height: '100%',
                        justifyContent: 'flex-end'
                    }}
                >
                    <View style={{ padding: 20 }}>
                        <Container direction='column' align='flex-start'>
                            <Text size='30px' color='#fff'>
                                {name}
                            </Text>
                            <Text 
                                m='10px 0' 
                                size='10px' 
                                weight='bold' 
                                color='silver' 
                                style={{ lineHeight: 17 }}
                            >
                                {describe}
                            </Text> 
                            <Container justify='flex-start' m='20px 0'>                        
                                {genr?.map(i => <TextT style={{ marginRight: 10 }} key={i}>{i}</TextT>)}      
                            </Container>
                        </Container>
                    </View>
                </LinearGradient>
            </Container>
        </Container>
        </TouchableOpacity>
    )
}