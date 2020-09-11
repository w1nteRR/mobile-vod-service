import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CheckboxCustom } from '../../common/styled/inputs/inputs.shared'
import { Container } from '../../common/utils/layout'
import { TextT } from '../../common/utils/typography'

import { RootState } from '../../../redux/rootReducer'
import { setSearchData, setActiveTag, removeSearchData } from '../../../redux/search/actions'

export const TagList: FC = () => {
    
    const tags = useSelector((state: RootState) => state.search.tags)
    const searchData = useSelector((state: RootState) => state.search.searchData)
    const dispatch = useDispatch()

    for( let key in searchData ) {
        if(!searchData[key].length) {
            delete searchData[key]
            dispatch(removeSearchData(key))
        }
    }

    const _handle = (type: string, id: number) => {

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
        
    return <>
    {
        Object.entries(tags).map((item, index) =>
            <Container direction='column' key={index} m='0 0 100px'>
                <Container justify='flex-start' p='20px'>
                    <TextT>{item[0]}</TextT>
                </Container>
                <Container wrap='true'>
                    {
                        item[1].map(tag =>
                            <CheckboxCustom
                                key={tag.id}
                                text={tag.value}
                                isActive={tag.checked}
                                onPress={() => _handle(item[0], tag.id)}
                            />
                        )
                    }
                </Container>
            </Container>
        )
    }
    </>
}