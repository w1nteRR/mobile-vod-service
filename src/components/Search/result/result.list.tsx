import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { ResultCard } from './result.card'

import { getSearchResult } from '../../../redux/search/selectors'
import { useRedirect } from '../../../hooks/navigation/useRedirect'

export const SearchResult: FC = () => {

  const result = useSelector(getSearchResult)
  const { redirectToFilmScreen } = useRedirect()

  return (
    <ScrollView>
      {
        result.map(i => 
          <ResultCard 
            key={i.name} 
            name={i.name!}
            _id={i._id}
            onPress={redirectToFilmScreen} 
          />
        )
      }      
    </ScrollView>
  )
}