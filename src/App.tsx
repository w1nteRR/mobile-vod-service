import React from 'react'
import { Provider } from 'react-redux'

import { RootStackScreen } from './navigation/root'

import { store } from './redux/store'

export const App = () => {
         
    return (
        <Provider store={store}>
            <RootStackScreen />
        </Provider>
    )
}