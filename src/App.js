import React, { useReducer } from 'react'

import { playerReducer, initialPlayerState, PlayerContext } from './reducers/Player'
import { searchReducer, initialSearchState, SearchContext } from './reducers/SearchTags'

import { AuthContext } from './context'
import { useAuth } from './hooks/Auth'

import { RootStackScreen } from './stackNavigator'

const App = () => {
    const { token, login, logout, userId } = useAuth()
	const isAuthenticated = !!token
    const [playerState, playerDispatch] = useReducer(playerReducer, initialPlayerState)
    const [searchState, searchDispatch] = useReducer(searchReducer, initialSearchState)

         
    return (
        <AuthContext.Provider value={{ token, login, logout, userId, isAuthenticated }}>
        <PlayerContext.Provider value={{ playerState, playerDispatch }}>
        <SearchContext.Provider value={{ searchState, searchDispatch }}>
            <RootStackScreen />
        </SearchContext.Provider>
        </PlayerContext.Provider>
        </AuthContext.Provider>
    )
}

export default App
