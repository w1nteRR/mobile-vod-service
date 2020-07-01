import React, { useContext } from 'react'

import SettingsBtnWrapper from '../modals/Player/Settings.button'
import { Button } from '../shared/Button'
import { Container } from '../styled/screens'
import { Text } from '../styled/typography'

import { SearchContext } from '../../reducers/Search'
import { useSearch } from '../../hooks/useSearch'

import years from '../../data/years.json'
import companies from '../../data/companies.json'
import genres from '../../data/genres.json'

export const SearchNav = () => {

    const [state, dispatch] = useContext(SearchContext)
    
    const { searchByTags } = useSearch()

    return (
        <>
        <SettingsBtnWrapper 
            onPress={() => dispatch({
                type: 'SET_FILTER_DATA',
                payload: {
                    data: companies,
                    type: 'company'
                }
            })}
            buttonText='companies' 
        />
        <SettingsBtnWrapper 
            onPress={() => dispatch({
                type: 'SET_FILTER_DATA',
                payload: {
                    data: genres,
                    type: 'genr'
                }
            })}
            buttonText='genres' 
        />
        <SettingsBtnWrapper 
            onPress={() => dispatch({
                type: 'SET_FILTER_DATA',
                payload: {
                    data: years,
                    type: 'year'
                }
            })}
            buttonText='years' 
        />
        <Container 
            m='15px' 
            w='90%' 
            style={{ 
                position: 'absolute',
                bottom: 0 
                }}
            >
                {
                    Object.keys(state.searchData).length
                    ?   <Button type='primary' text='search' onPress={() => searchByTags()} />
                    :   <Text 
                            color='silver' 
                            uppercase 
                            size='12px'
                            weight='bold'
                        >
                            Choose tags
                        </Text>
                }
        </Container>
        </>
    )
}