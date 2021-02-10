import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Image } from 'react-native'

import { Container } from '../common/utils/layout'
import { TextT, Text } from '../common/utils/typography'

import { getUser } from '../../redux/auth/selectors'

export const UserIntro = memo(() => {

	const { name, nickname, picture } = useSelector(getUser, shallowEqual)

	if(!nickname && !name) return null

	return (
		<Container direction='column' p='20px' align='flex-start' bgColor='black'>
			<Container justify='space-between'>
				<Text size='21px' color='#fff'>Hello, {name ? name.split(' ')[0] : nickname}</Text>
				<Image
					source={{ uri: picture }}
					style={{
						width: 35,
						height: 35,
						borderRadius: 100
					}}
				/>
			</Container>
			<TextT>New updates for you</TextT>
		</Container>
	)
})