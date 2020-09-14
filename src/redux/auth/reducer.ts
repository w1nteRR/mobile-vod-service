import { AuthActionTypes, AuthState, SET_AUTH } from './types'

const initialState: AuthState = {
    isAuthenticated: false,
    token: ''
}

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch(action.type) {
        case SET_AUTH: 
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                token: action.payload.token
            }
        default:
            return state
    }
}