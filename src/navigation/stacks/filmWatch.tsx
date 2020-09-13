import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { FilmWatch } from '../../screens/Film/FilmWatch'
import { PlayerModal } from '../../components/Player/modal/Player.modal'
import { QualityModal, LanguageModal } from '../../components/Player/modal/Settings.modal'

type FilmWatchStackParams = {
    FilmWatch: {
        filmId: string
    }
    PlayerModal: undefined,
    PlayerModalQuality: undefined,
    PlayerModalLanguage: undefined
}

const FilmWatchStack = createStackNavigator<FilmWatchStackParams>()

export const FilmWatchStackScreen = () => 
    <FilmWatchStack.Navigator initialRouteName='FilmWatch' headerMode='none' mode='modal'>
        <FilmWatchStack.Screen name="FilmWatch" component={FilmWatch} />
        <FilmWatchStack.Screen 
            name="PlayerModal" 
            component={PlayerModal} 
            options={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}  
        />
        <FilmWatchStack.Screen 
            name="PlayerModalQuality" 
            component={QualityModal}
            options={{
                animationEnabled: false,
                cardStyle: {
                    backgroundColor: 'transparent'
                }

            }}  
        />
         <FilmWatchStack.Screen 
            name="PlayerModalLanguage" 
            component={LanguageModal}
            options={{
                animationEnabled: false,
                cardStyle: {
                    backgroundColor: 'transparent'
                }

            }}  
        />
    </FilmWatchStack.Navigator>
