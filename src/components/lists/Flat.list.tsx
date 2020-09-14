import React, { FC } from 'react'
import { FlatList } from 'react-native'

import { BgImgCard } from '../common/styled/cards/cards.shared'

import { Container } from '../common/utils/layout'
import { TextT } from '../common/utils/typography'

import { IFilmShort } from '../../interfaces/film/IFilm'


interface IFlatListCustom {
    horizontal?: boolean
    title?: string | number
    data: Array<IFilmShort>
    initialRender?: number
    onItemClick?: () => void
    onEndReached?: () => void
}

export const ListImgCustom: FC<IFlatListCustom> = ({ 
    horizontal, 
    title, 
    data, 
    initialRender,
    onItemClick, 
    onEndReached 
}) => 
    <Container direction='column'>
        <Container justify='flex-start' p='10px'>
            <TextT>{title}</TextT>
        </Container>
        <FlatList 
            onEndReached={onEndReached}
            initialNumToRender={initialRender}
            horizontal={horizontal}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => 
                <BgImgCard 
                    key={item._id} 
                    img={item.img}
                    h='200px'
                    w='390px' 
                    m='10px'
                    onPress={onItemClick} 
                />
            }
        />
    </Container>
