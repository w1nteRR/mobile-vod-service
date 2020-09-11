import { 
    SearchState, 
    SearchActionTypes, 
    GET_FILMS_BY_NAME, 
    INIT_TAGS, 
    SET_ACTIVE_TAG, 
    SET_SEARCH_DATA, 
    REMOVE_SEARCH_DATA 
} from './types'

const initalState: SearchState = {
    result: [],
    tags: {
        genr: [],
        company: [],
        year: []
    },
    searchData: {}
}

export const searchReducer = (state = initalState, action: SearchActionTypes ): SearchState => {
    switch(action.type) {
        case GET_FILMS_BY_NAME:
            return {
                ...state,
                result: action.payload
            }
        case INIT_TAGS:
            return {
                ...state,
                tags: action.payload
            }
        case SET_ACTIVE_TAG:
            return {
                ...state,
                tags: {
                    genr: action.payload.genr,
                    company: action.payload.company,
                    year: action.payload.year
                }
            }
        case SET_SEARCH_DATA:
            return {
                ...state,
                searchData: {
                    ...state.searchData,
                    [action.payload.key]: action.payload.data.map(tag => tag.value)
                }
            }
        case REMOVE_SEARCH_DATA:
            return {
                ...state,
                searchData: {
                    ...state.searchData
                }
            }
        default:
            return state
    }
}