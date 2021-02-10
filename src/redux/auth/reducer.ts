import { ActionTypes, AuthState, SET_AUTH, SET_USER, TOGGLE_LOADING } from './types'

const initialState: AuthState = {
    isAuthenticated: false,
    user: {
        nickname: '',
        picture: ''
    },
    loading: true
}

export const authReducer = (state = initialState, action: ActionTypes): AuthState => {
    switch(action.type) {
        case SET_AUTH: 
            return {
                ...state,
                isAuthenticated: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}