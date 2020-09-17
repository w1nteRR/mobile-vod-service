import React, { FC } from 'react'
import { FlatList } from 'react-native'

import { Container } from '../common/utils/layout'
import { Title } from '../common/utils/typography'


interface IFlatListCustom {
    horizontal?: boolean
    title?: string | number
    data: Array<any>
    initialRender?: number
    onEndReached?: () => void
    render(i: object): void
}

export const ListImgCustom: FC<IFlatListCustom> = ({
    horizontal,
    title,
    data,
    initialRender,
    onEndReached,
    render
}) => 
    <Container direction='column'>
        <Container justify='flex-start' p='10px'>
            <Title>{title}</Title>
        </Container>
        <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onEndReached={onEndReached}
            initialNumToRender={initialRender}
            horizontal={horizontal}
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => render(item)}
        />
    </Container>
 
