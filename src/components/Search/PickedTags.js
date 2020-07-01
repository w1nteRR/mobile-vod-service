import React, { useContext } from 'react'

import { Tag } from '../shared/Tag'

import { SearchContext } from '../../reducers/Search'
import { Container } from '../styled/screens'
import { Button } from '../shared/Button'

export const PickedTags = () => {
    
    const [state, dispatch] = useContext(SearchContext)

    return (
        <>
        {
            Object.keys(state.searchData).length 
            ?
            <Container justify='flex-end' p='10px'>
                <Button 
                    type='danger' 
                    iconName='delete'
                    iconColor='#fff'
                    w='30px' 
                    p='5px' 
                    onPress={() => dispatch({
                        type: 'CLEAR_FILTER_DATA'
                    })}
                />
            </Container>
            :   null
        }
      
        <Container wrap m='20px'>
        { Object.values(state.searchData).flat().map(item => <Tag key={item} value={item} />) }
        </Container>
        </>
    )
}