import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { Image } from 'react-native'

import { DANGER, SUCCESS } from '../../common/utils/colors'
import { Container } from '../../common/utils/layout'
import { Text, TextT } from '../../common/utils/typography'

import { ScrollContainer } from './Scroll.container'

export const Rating: FC<{ name: string }> = ({
    name
}) => {

    const [rating, setRating] = useState({
        ratings: [],
        imdb: {
            rating: 0,
            votes: 0
        }
    })

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`http://www.omdbapi.com/?t=${name}&apikey=507695cd`)

                setRating({
                    ratings: res.data.Ratings,
                    imdb: {
                        rating: res.data.imdbRating,
                        votes: res.data.imdbVotes
                    }
                })

            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    return (
        <ScrollContainer title='Rating and reviews'>
            <Container justify='space-between' p='20px'>
                <Container w='30%' align='flex-start' direction='column'>
                    <Text 
                        size='46px' 
                        color='#fff'
                    >
                        {rating.imdb.rating}
                    </Text>
                    <Text size='10px' weight='bold' color='gray'>{rating.imdb.votes}</Text>
                </Container>
                <Container  
                    w='70%' 
                    direction='column'
                    align='flex-start'
                >
                    {
                        rating.ratings.length < 2
                        &&
                        <Container p='30px 10px'>
                            <TextT>Detailed ranking is not available</TextT>
                        </Container>
                    }
                    {
                        rating.ratings.slice(1, 3).map((item, index) => 
                        <Container 
                            m='10px 0'
                            p='15px'
                            justify='space-between'
                            style={{ 
                                borderRadius: 10, 
                                borderColor: 'silver', 
                                borderWidth: .8 
                            }}
                            key={index}
                        >
                            <Image 
                                {...img}
                                source={{ uri: img.uri[index] }} 
                            />
                            <Text 
                                m='10px 0' 
                                size='13px' 
                                weight='bold'
                                color={item.Value.slice(0, 2) > 50 ? SUCCESS : DANGER}
                            >
                                {item.Value}
                            </Text> 
                        </Container>
                        )
                    }
                </Container>
            </Container>
        </ScrollContainer>
    )
}

const img = {
    style: {
        width: 35,
        height: 35,
        borderRadius: 50
    },
    uri: [
        'https://i.pinimg.com/originals/2a/b6/09/2ab609289e20775a730d65d1436fe0b3.png',
        'https://www.pinclipart.com/picdir/big/149-1497095_file-metacritic-svg-wikimedia-commons-gucci-logo-svg.png'
    ]
}