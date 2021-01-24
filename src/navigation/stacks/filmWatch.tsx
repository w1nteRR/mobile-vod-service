import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Watch } from '../../screens/Film/Watch'
import { PlayerModal } from '../../components/Player/modal/player.modal'
import { QualityModal } from '../../components/Player/modal/quality.modal'
import { AudioModal } from '../../components/Player/modal/audio.modal'

type FilmWatchStackParams = {
    Watch: {
        filmId: string
    }
    PlayerModal: undefined
    PlayerQuality: undefined
    PlayerAudio: undefined
}

const FilmWatchStack = createStackNavigator<FilmWatchStackParams>()

export const FilmWatchStackScreen = () => 
    <FilmWatchStack.Navigator initialRouteName='Watch' headerMode='none' mode='modal'>
        <FilmWatchStack.Screen name="Watch" component={Watch} />
        <FilmWatchStack.Screen 
            name="PlayerModal" 
            component={PlayerModal} 
            options={options}  
        />
        <FilmWatchStack.Screen 
            name="PlayerQuality" 
            component={QualityModal}
            options={options}  
        />
        <FilmWatchStack.Screen 
            name="PlayerAudio" 
            component={AudioModal}
            options={options}  
        />
    </FilmWatchStack.Navigator>

const options = {
    cardStyle: {
        backgroundColor: 'transparent'
    }
}