import React from 'react'
import { View } from 'react-native'

import Player from '../../components/Player/Player'

const FilmPlayer = ({ route }) => {

    return (
        <View style={{flex: 1}}>
            <Player 
                timeContinue={route.params.timeContinue}
                filmId={route.params.filmId}
                filmImg={route.params.filmImg} 
            />
        </View>
    )
}

export default FilmPlayer