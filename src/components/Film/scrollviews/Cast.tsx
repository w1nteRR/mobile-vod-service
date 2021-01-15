import React, { FC, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ScrollContainer } from './Scroll.container'

import { BgImgCard } from '../../common/styled/cards/cards.shared'
import { Container } from '../../common/utils/layout'
import { TextT, Text } from '../../common/utils/typography'

import { IActor } from '../../../interfaces/cast/IActor'
import { CastCard } from '../cast/cast.card'
import { Button } from '../../common/styled/buttons/buttons.shared'
import { ScrollView } from 'react-native-gesture-handler'

interface ICastProps {
    cast: Array<IActor>
    onArrowClick: () => void
}

export const Cast: FC<ICastProps> = ({ 
    cast,
    onArrowClick 
}) => {
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
                    onPress={onArrowClick}
                />
            }
        >
            {
                cast.map(actor => 
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
}