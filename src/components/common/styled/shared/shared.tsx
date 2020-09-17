import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../buttons/buttons.shared'

import { TagStyled } from './shared.styled'

export const Tag: FC = ({ 
    children 
}) => <TagStyled>{children}</TagStyled>

export const HeaderBtn: FC<{ isAuth: boolean }> = ({
    isAuth
}) => {

    const navigation = useNavigation()

    const redirect = (isAuth: boolean) => 
        isAuth 
        ? navigation.navigate('') 
        : navigation.navigate('SignIn')

    return  <Button 
                bgColor={isAuth ? 'dark' : 'primary'} 
                iconName={isAuth ? 'bell' : 'account'}
                iconSize={15} 
                h='80%' 
                w='45px' 
                m='10px 10px 0 0' 
                brRadius='10px' 
                onPress={() => redirect(isAuth)}
            />
}