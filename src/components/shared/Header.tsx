import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Text} from '../common/utils/typography'
import { Container } from '../common/utils/layout'

interface IHeaderProps {
    title?: string
}

export const Header: FC<IHeaderProps> = ({ title }) => 
    <Container 
        justify='space-between' 
        w='90%' 
        m='0 auto' 
        p='20px'
    >
        <Text>{title}</Text>
        <Icon 
            name='bell' 
            size={20} 
            color='#fff' 
        />
    </Container>