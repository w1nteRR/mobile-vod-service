import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { ResultCard } from './result.card'

import { getSearchResult } from '../../../redux/search/selectors'

export const SearchResult: FC = () => {

  const result = useSelector(getSearchResult)

  return (
    <ScrollView>
      {
        result.map(i => <ResultCard key={i.name} name={i.name!} image={i.img} />)
      }      
    </ScrollView>
  )
}