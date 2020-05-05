import { createContext } from 'react'

export const SearchContext = createContext()

export const initialSearchState = {
   year: [],
   company: [],
   genr: []
} 

export const searchReducer = (searchState, action) => {
    switch(action.type) {
        case 'toggleYears': 
            return {
                ...searchState,
                year: searchState.year = action.payload
            }
        case 'toggleCompanies': 
            return {
                ...searchState,
                company: searchState.company = action.payload
            }
        case 'toggleGenres': 
            return {
                ...searchState,
                genr: searchState.genr = action.payload
            }
        default: 
            return initialSearchState
    }
}


    