import React, { FC, useState } from 'react'
import { ScrollView } from 'react-native'

import { Button } from '../../common/styled/buttons/buttons.shared'
import { Container } from '../../common/utils/layout'
import { BgImgCard } from '../../common/styled/cards/cards.shared'
import { Title } from '../../common/utils/typography'

import { ListImgCustom } from '../../lists/Flat.list'

import { useAxios } from '../../../hooks/useAxios'
import { useFilter } from '../../../hooks/utils/useFilter'

import { IBrowseView } from '../../../interfaces/browse/IBrowse'
import { IFilmShort } from '../../../interfaces/film/IFilm'


interface IFilterByProps extends IBrowseView {
    filters: Array<string | number>
}

export const FilterBy: FC<IFilterByProps> = ({ title, data, filters }) => {

    const [filter, setFilter] = useState(filters[0])
    
    const { res, loading } = useAxios('/api/search/film/filter', {
        method: 'POST',
        data: {
            data: {
                year: 2019
            }
        }
    })

    if(loading) return <></>

    const { films } = useFilter(res?.data.films)

    const filtred = films(filter)

    return (
        <>
        <Container justify='flex-start' p='10px'>
            <Title>{title}</Title>
        </Container>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                filters.map((item, index) => 
                    <Button 
                        key={index}
                        text={item}
                        bgColor={filter === item ? 'dark' : ''}
                        w='100px'
                        h='40px'
                        m='10px 5px'
                        brRadius='10px'
                        onPress={() => setFilter(item)}
                    />
                )
            }
        </ScrollView>
        <ListImgCustom 
            data={filtred} 
            horizontal 
            initialRender={4} 
            render={(item: IFilmShort) => <BgImgCard img={item.img}  /> } 
        />
        </>
    )
}