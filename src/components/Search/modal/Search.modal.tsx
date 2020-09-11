import React, { FC, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { ModalCard } from '../../common/styled/cards/cards.shared'
import { Container } from '../../common/utils/layout'

import { TagList } from './Tag.list'
import { Control } from './Control'

import { RootState } from '../../../redux/rootReducer'
import { initTags } from '../../../redux/search/actions'


export const SearchModal: FC = () => {

    const dispatch = useDispatch()

    const searchData = useSelector((state: RootState) => state.search.searchData)

    useEffect(() => { dispatch(initTags()) }, [])

    const isSearchData = Object.values(searchData).length > 0

    return (
       <ModalCard>
            <Container h='500px' wrap='true' >
            <ScrollView>
               <TagList />
            </ScrollView>
            {
                isSearchData
                &&
                <Control />
            }
            </Container>
       </ModalCard>
    )
}