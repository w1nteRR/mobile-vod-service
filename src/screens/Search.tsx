import React, { FC } from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import { Background, Container } from '../components/common/utils/layout'
import { TextT } from '../components/common/utils/typography'

import { Header } from '../components/shared/Header'

import { SearchForm } from '../components/Search/Search.form'
import { RootState } from '../redux/rootReducer'
import { BgImgCard } from '../components/common/styled/cards/cards.shared'

export const Search: FC = () => {
    const navigation = useNavigation()

    const result = useSelector((state: RootState) => state.search.result)
    
    return (
        <Background>
            <FlatList 
                data={result}
                renderItem={item => 
                    <BgImgCard 
                        img={item.item.img} 
                        h='220px' 
                        m='10px' 
                        onPress={() => navigation.navigate('Film', {
                            filmId: item.item._id
                        })} 
                    />
                }
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={0.01}
                    initialNumToRender={4}
                    ListHeaderComponent={() => (
                    <>
                    <Header title='' />
                    <SearchForm />
                    <Container direction='column' h='75px' m='50px 0' justify='space-around' >
                        <TextT>Or add some tags and we will find</TextT>
                        <Icon 
                            name='tune' 
                            color='#fff' 
                            size={25} 
                            onPress={() => navigation.navigate('SearchModal')}
                        />
                    </Container>
                    </>
                )}
               
            />  
        </Background>
    )
}
