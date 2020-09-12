import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import { setActiveTag, setSearchData, updateSearchData } from '../../redux/search/actions'

export const useSearch = () => {

    const dispatch = useDispatch()
    
    const tags = useSelector((state: RootState) => state.search.tags)
    const searchData = useSelector((state: RootState) => state.search.searchData)

    for(let key in searchData) {
        if(!searchData[key].length) {
            delete searchData[key]
            dispatch(updateSearchData())
        }
    }

    function resetTags () {
        for (const [_, value] of Object.entries(tags)) {
            value.forEach(tag => tag.checked = false )
        }

        dispatch(setActiveTag(tags))
    }

    function handleTag (type: string, id: number) {
        for (const [key, value] of Object.entries(tags)) {
            key === type && value!.forEach((checkbox) => {
                if(checkbox.id === id) {
                    checkbox.checked = !checkbox.checked
                    
                    const checkedOnly = value.filter(tag => tag.checked)
                    
                    dispatch(setSearchData(key, checkedOnly))
                }                
            })
        }

        dispatch(setActiveTag(tags))
    }

    return {
        resetTags,
        handleTag
    }
}