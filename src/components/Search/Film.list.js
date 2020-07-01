import React, { useContext } from 'react'
import { FlatList } from 'react-native'

import FilmCard from '../Browse/FilmCard'

import { Container } from '../styled/screens'
import { Button } from '../shared/Button'

import { SearchContext } from '../../reducers/Search'

export const FilmList = () => {

    const [state, dispatch] = useContext(SearchContext)

    const _renderItem = ({ item }) => <FilmCard item={item} />

    return (
        <>
        <Container justify='flex-end' p='10px'>
            {
                state.films.length
                ?
                <Button 
                    iconName='delete'
                    iconSize={20}
                    iconColor='#fff'
                    type='danger'
                    w='30px'
                    p='5px' 
                    onPress={() => dispatch({
                        type: 'CLEAR_FILMS'
                    })}
                />
                : null
            }
        </Container>
        <FlatList 
            renderItem={_renderItem} 
            data={state.films} 
            style={{ margin: 10 }} 
            keyExtractor={(item, index) => index.toString()}
        />
        </>
    )
}