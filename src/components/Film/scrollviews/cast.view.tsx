import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { ScrollContainer } from './Scroll.container'

import { CastCard } from '../cast/cast.card'
import { Button } from '../../common/styled/buttons/buttons.shared'

import { IActor } from '../../../interfaces/cast/IActor'

interface ICastProps {
    cast: Array<IActor>
    name: string
}

export const Cast = memo<ICastProps>(({ 
    cast,
    name
}) => {

    const navigation = useNavigation()

    if(!cast.length) return null

    return (
        <ScrollContainer 
            title='Cast' 
            right={ 
                <Button 
                    iconName={'chevron-right'} 
                    bgColor='' 
                    w='40px' 
                    h='40px' 
                    brRadius='10px' 
                    iconSize={20} 
                    onPress={() => navigation.navigate('Cast', { cast, name })}
                />
            }
        >
            {
                cast.slice(0, 3).map(actor => 
                    <CastCard 
                        key={actor._id}
                        img={actor.films.img} 
                        actorName={actor.actorName} 
                        actorRole={actor.films.actorRole} 
                        films={actor.films}
                    />
                )
            }
        </ScrollContainer>
    )
})