import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Dimensions } from 'react-native'

import { Button } from '../common/styled/buttons/buttons.shared'

const { width } = Dimensions.get('screen')

export const ButtonWatch = memo<{ filmId: string, name: string }>(({
    filmId,
    name
}) => {
    
    const navigation = useNavigation()
    
    return <Button
                bgColor='primary'
                h='45px'
                w={width - 20 + 'px'}
                text='Watch now'
                brRadius='10px'
                onPress={() => navigation.navigate('Watch', {
                    screen: 'Watch',
                    params: { filmId, name }
                })}
            />
})