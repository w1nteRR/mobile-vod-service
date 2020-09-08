import React, { FC } from 'react'

import { Container } from '../../common/utils/layout'
import { Button } from '../../common/styled/buttons/buttons.shared'

interface IControlProps {
    filmId: string
}

export const Control: FC<IControlProps> = ({ filmId }) => {
    return (
        <Container justify='space-between' p='30px 20px'>
            <Button 
                text='' 
                bgColor='primary' 
                w='100px' 
                h='45px' 
                iconName='play' 
                iconSize={30} 
                brRadius='5px' 
            />
            <Button 
                text='' 
                bgColor='' 
                w='45px' 
                h='45px' 
                iconName='dots-vertical' 
                iconSize={30} 
                brRadius='5px' 
            />
        </Container>
    )
}