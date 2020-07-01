import React, { useContext } from 'react'
import { FlatList } from 'react-native'

import FilmCard from '../../components/Browse/FilmCard'

import { Background } from '../../components/styled/screens'
import { Header } from '../../components/shared/Header'
import { Text } from '../../components/styled/typography'

import { useAxios } from '../../hooks/useAxios'
import { AuthContext } from '../../context'

const WatchLater = () => {

    const { userId } = useContext(AuthContext)

    const { res, loading } = useAxios(`/library/watch-later/${userId}`, {
        method: 'GET'
    })

    if(loading) {
        return (
            <Background>
                <Text>loading</Text>
            </Background>
        )
    }

    return (
        <Background>
            <Header title='Watch later' />
            <FlatList 
                data={res}
                renderItem={({ item }) => <FilmCard item={item} />} 
                keyExtractor={(item, index) => index.toString()}
                style={{ margin: 10 }}
            />
        </Background>
    )
}

export default WatchLater