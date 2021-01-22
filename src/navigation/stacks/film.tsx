import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Film } from '../../screens/Film/Film'
import { About } from '../../screens/Film/About'
import { Cast } from '../../screens/Film/Cast'

import { IActor } from '../../interfaces/cast/IActor'
import { Episodes } from '../../screens/Film/Episodes'
import { IEpisodeShort } from '../../interfaces/film/IEpisode'
import { Watch } from '../../screens/Film/Watch'
import { FilmWatchStackScreen } from './filmWatch'

const FilmStack = createStackNavigator<FilmStackParams>()

type FilmStackParams = {
    Film: {
        filmId: string
    },
    FilmWatch: {
        filmId: string
    },
    About: {
        filmName: string
    },
    Cast: {
        cast: Array<IActor>
        name: string
    },
    Episodes: {
        name: string
        series: Array<IEpisodeShort>
    },
    Watch: {
        filmId: string
        name: string
    }
}

type FilmRouteProp = RouteProp<FilmStackParams, 'Film'>
export type AboutRouteProp = RouteProp<FilmStackParams, 'About'>
export type CastRouteProp = RouteProp<FilmStackParams, 'Cast'>
export type EpisodesRouteProp = RouteProp<FilmStackParams, 'Episodes'>
export type WatchRouteProp = RouteProp<FilmStackParams, 'Watch'>

export interface IFilmNavProps {
    route: FilmRouteProp
}

export const FilmStackScreen = () => 
    <FilmStack.Navigator initialRouteName='Film'>
        <FilmStack.Screen 
            name="Film" 
            component={Film}
        />
        <FilmStack.Screen 
            name="About" 
            component={About}
            options={options} 
        />
        <FilmStack.Screen 
            name="Cast" 
            component={Cast}
            options={options} 
        />
        <FilmStack.Screen 
            name="Episodes" 
            component={Episodes}
            options={options} 
        />
        <FilmStack.Screen 
            name='Watch'
            component={FilmWatchStackScreen}
            options={options}

        /> 
    </FilmStack.Navigator>

const options = {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}
