import React, { FC } from 'react'

import { Background } from '../components/common/utils/layout'

import { SearchForm } from '../components/Search/search.form'
import { SearchResult } from '../components/Search/result/result.list'

export const Search: FC = () => {    
    return (
        <Background>
            <SearchForm />
            <SearchResult />
        </Background>
    )
}
