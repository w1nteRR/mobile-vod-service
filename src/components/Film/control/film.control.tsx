import React, { FC, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../../common/utils/layout'
import { Button } from '../../common/styled/buttons/buttons.shared'
import { PRIMARY } from '../../common/utils/colors'

interface IControlProps {
    filmId: string
    isSerial: boolean
}

export const Control: FC<IControlProps> = ({ 
    filmId,
    isSerial 
}) => {

    const navigation = useNavigation()

    const [isFollow, setFollow] = useState(true)

    return (
        <Container justify='space-between' w='90%' m='40px 20px'>
            <Container w='35%' justify='flex-start'>
                <Button 
                    iconName='playlist-plus'  
                    iconSize={25} 
                    {...btn}
                />
                {
                isSerial 
                && 
                <Button 
                    iconName={isFollow ? 'heart' : 'heart-outline'} 
                    iconColor={isFollow ? '#FD73AD' : 'silver'} 
                    iconSize={20} 
                    {...btn}
                />
            }
            </Container>
            <Button 
                bgColor='primary'
                iconName='play' 
                h='50px' 
                w='220px' 
                text='Watch now'
                brRadius='10px' 
                justify='space-around'
                iconSize={30} 
            />
        </Container>
    )
}

const btn = {
    h: '50px',
    w: '50px',
    brRadius: '10px',
    bgColor: 'dark',
    m: '0 10px 0 0'
}