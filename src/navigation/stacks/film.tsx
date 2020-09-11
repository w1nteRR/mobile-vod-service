import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Film } from '../../screens/Film/Film'

const FilmStack = createStackNavigator<FilmStackParams>()

type FilmStackParams = {
    Film: {
        filmId: string
    }
}

type FilmRouteProp = RouteProp<FilmStackParams, 'Film'>

export interface IFilmNavProps {
    route: FilmRouteProp
}

export const FilmStackScreen = () => 
    <FilmStack.Navigator initialRouteName='Film' headerMode='none'>
        <FilmStack.Screen name="Film" component={Film} />
    </FilmStack.Navigator>