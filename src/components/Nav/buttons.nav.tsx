import React, { FC } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../common/styled/buttons/buttons.shared'

import { getUser } from '../../redux/auth/selectors'

export const ButtonsNav: FC<{ isAuth: boolean }> = ({
  isAuth
}) => {

  const navigation = useNavigation()
  const { picture } = useSelector(getUser, shallowEqual)

  return (
    <>
      <Button 
        bgColor='' 
        iconName='magnify'
        iconSize={20} 
        h='35px' 
        w='35px' 
        brRadius='10px' 
        onPress={() => navigation.navigate('SearchRoot')}
        m='0 20px 0 0'
      />
      {
        isAuth
        ? <TouchableOpacity onPress={() => navigation.navigate('ProfileRoot')}>
            <Image
              source={{ uri: picture }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 100
              }}
            />
          </TouchableOpacity>
        : <Button 
            bgColor='primary' 
            iconName='account'
            iconSize={15} 
            h='35px' 
            w='35px' 
            brRadius='10px' 
            onPress={() => navigation.navigate('SignIn')}
          />
      }
      </>
  )
}