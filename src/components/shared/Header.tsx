import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { Button } from '../common/styled/buttons/buttons.shared'

import { Text } from '../common/utils/typography'
import { Container } from '../common/utils/layout'

import { RootState } from '../../redux/rootReducer'

interface IHeaderProps {
    title?: string
}

export const Header: FC<IHeaderProps> = ({ title }) => {

    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated)
    const navigation = useNavigation()

    return (
        <Container
            justify='space-between'
            w='90%'
            m='0 auto'
            p='20px'
        >
            <Text>{title}</Text>
            {
                isAuth
                ?   <Icon name='bell' size={20} color='#fff' />
                :   <Button 
                        text='' 
                        iconName='account' 
                        iconSize={15} 
                        bgColor='primary' 
                        w='35px' 
                        h='35px' 
                        brRadius='10px' 
                        onPress={() => navigation.navigate('SignIn')}
                    />
            }
            
        </Container>
    )
}