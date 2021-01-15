import React, { FC } from 'react'
import { FlatList, Image, View } from 'react-native'

import { FilterBy } from '../../components/Browse/views/FilterBy'
import { ViewVideo } from '../../components/Browse/views/View.video'

import { FilmDetails } from '../../components/common/styled/cards/cards.shared'

import { Background } from '../../components/common/utils/layout'
import { Text, Title } from '../../components/common/utils/typography'
import { Test } from '../../components/Explore/test'
import { Trends } from '../../components/Home/Trends'
import { ListImgCustom } from '../../components/lists/Flat.list'

import { useAxios } from '../../hooks/useAxios'
import { IFilmDetailed } from '../../interfaces/film/IFilm'

interface IFeed {
    title: string
    data: Array<any>
    type: string
    filters?: Array<string | number>
}

const feed = [
    // {
    //     title: 'Companies',
    //     data: [
    //         {
    //             img: '/static/stuff/companies/netflix.jpg'
    //         },
    //         {
    //             img: '/static/stuff/companies/hbo.jpg'
    //         },
    //         {
    //             img: '/static/stuff/companies/marvel.png'
    //         },
    //         {
    //             img: '/static/stuff/companies/paramount.jpg'
    //         },
    //         {
    //             img: '/static/stuff/companies/disney.jpg'
    //         },
    //         {
    //             img: '/static/stuff/companies/universal.jpg'
    //         },
    //         {
    //             img: '/static/stuff/companies/warner.png'
    //         },
    //         {
    //             img: '/static/stuff/companies/columbia.jpg'
    //         }
    //     ],
    //     type: 'small'
    // },
    {
        title: 'Best of',
        data: [],
        type: 'filter',
        filters: ['Action', 'Drama', 'Crime', 'Horror', 'Comedy', 'Sci-fi']
    },
    // {
    //     title: 'Coming soon',
    //     data: [
    //         {
    //             _id: '5e3d4f7d1323ea24d4c75bf9',
    //             name: 'Mandalorian'
    //         },
    //         {
    //             _id: '5e398e34e3ac7327986bd788',
    //             name: 'Irishman'
    //         }
    //     ],
    //     type: 'trailers'
    // },
]

const typeChecker = (feed: IFeed) => {
    switch(feed.type) {
        case 'trailers': 
            return <View><ViewVideo data={feed.data} title={feed.title} /></View>
        case 'filter': 
            return <FilterBy filters={feed.filters!} data={feed.data} title={feed.title}  />
        case 'default':
            return <ListImgCustom 
                    initialRender={4} 
                    data={feed.data} 
                    horizontal 
                    title={feed.title} 
                    render={(item: IFilmDetailed) => 
                        <FilmDetails 
                            img={item.img} 
                            name={item.name} 
                            describe={item.describe} 
                            genr={item.genr} 
                        />
                    } 
                />
        default:
            throw new Error('Feed object has not type')
    }
}

export const Explore: FC = () => {
    return (
        <Background>
            <Trends />
        </Background>
    )
}

