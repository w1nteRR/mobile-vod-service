import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Film } from '../../screens/Film/Film'
import { FilmWatch } from '../../screens/Film/FilmWatch'

const FilmStack = createStackNavigator<FilmStackParams>()

type FilmStackParams = {
    Film: {
        filmId: string
    },
    FilmWatch: {
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
        <FilmStack.Screen name='FilmWatch' component={FilmWatch} />
    </FilmStack.Navigator>
