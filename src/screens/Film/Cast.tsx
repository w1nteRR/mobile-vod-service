import React, { FC } from 'react'
import { FlatList } from 'react-native'

import { Background } from '../../components/common/utils/layout'

import { CastCard } from '../../components/Film/cast/cast.card'
import { HeaderFilm } from '../../components/Film/header.film'

import type { CastRouteProp } from '../../navigation/stacks/film'

export const Cast: FC<{ route: CastRouteProp }> = ({
    route
}) => 
    <Background>
        <HeaderFilm name={route.params.name} sub='Cast' />
        <FlatList 
            data={route.params.cast}
            renderItem={actor =>
                <CastCard 
                    key={actor.item._id}
                    img={actor.item.films.img} 
                    actorName={actor.item.actorName} 
                    actorRole={actor.item.films.actorRole} 
                    films={actor.item.films}
                /> 
            }
            keyExtractor={(_, index) => index.toString()} 
            style={{
                marginTop: 90
            }}
        />
    </Background>