import React, { createContext, useReducer } from 'react'

export const SearchContext = createContext()

export const initialState = {
    searchData: {},
    toggleFilter: false,
    tags: {
        data: [],
        type: ''
    },
    films: [],
    isModalOpen: false
} 

export const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_FILTER_DATA': 
            return {
                ...state,
                tags: action.payload,
                toggleFilter: true,
                isModalOpen: true
            }
        case 'ADD_TO_SEARCH_DATA': 
            return {
                ...state,
                searchData: {
                    ...state.searchData,
                    [action.payload.key]: action.payload.data
                }
            }
        case 'GET_FILMS_FILTRED':
            return {
                ...state,
                films: action.payload
            }
        case 'CLEAR_FILMS': 
            return {
                ...state,
                films: []
            }
        case 'HIDE_FILTER': 
            return {
                ...state,
                toggleFilter: false
            }
        case 'CLEAR_FILTER_DATA': 
            return {
                ...state,
                searchData: {},
                tags: {
                    ...state.tags,
                    data: state.tags.data.map(tag => ({
                        ...tag,
                        checked: tag.checked = false
                    })),
                },
            }
        case 'CLOSE_MODAL': 
            return {
                ...state,
                isModalOpen: false
            }
        
        default: 
            throw new Error()
    }
}

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <SearchContext.Provider value={[state, dispatch]}>
           {children}
        </SearchContext.Provider>
    )
}