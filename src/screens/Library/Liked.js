import React, { useContext } from 'react'
import { FlatList } from 'react-native-gesture-handler'

import { Background } from '../../components/styled/screens'
import FilmCard from '../../components/Browse/FilmCard'
import { Header } from '../../components/shared/Header'
import { Text } from '../../components/styled/typography'

import { AuthContext } from '../../context'
import { useAxios } from '../../hooks/useAxios'

const Liked =  () => {

    const { userId } = useContext(AuthContext)

    const { res, loading } = useAxios(`/library/liked/${userId}`, {
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
            <Header title='Liked' />
            <FlatList 
                data={res}
                renderItem={({ item }) => <FilmCard item={item} />} 
                keyExtractor={(item, index) => index.toString()}
                style={{ margin: 10 }}
            />
        </Background>
    )
}

export default Liked