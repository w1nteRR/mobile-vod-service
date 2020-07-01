import React, { useReducer } from 'react'

import { playerReducer, initialPlayerState, PlayerContext } from './reducers/Player'

import { AuthContext } from './context'
import { useAuth } from './hooks/Auth'

import { RootStackScreen } from './stackNavigator'
import { SearchContextProvider } from './reducers/Search'

const App = () => {
    const { token, login, logout, userId } = useAuth()
	const isAuthenticated = !!token
    const [playerState, playerDispatch] = useReducer(playerReducer, initialPlayerState)

         
    return (
        <AuthContext.Provider value={{ token, login, logout, userId, isAuthenticated }}>
        <PlayerContext.Provider value={{ playerState, playerDispatch }}>
        <SearchContextProvider>
            <RootStackScreen />
        </SearchContextProvider>        
        </PlayerContext.Provider>
        </AuthContext.Provider>
    )
}

export default App
