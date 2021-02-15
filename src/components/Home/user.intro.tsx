import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { Container } from '../common/utils/layout'
import { TextT, Text } from '../common/utils/typography'

import { getUser } from '../../redux/auth/selectors'

export const UserIntro = memo(() => {

	const { name, nickname } = useSelector(getUser, shallowEqual)

	if(!nickname && !name) return null

	return (
		<Container direction='column' p='20px' align='flex-start' bgColor='black'>
			<Container justify='space-between'>
				<Text size='21px' color='#fff'>Hello, {name ? name.split(' ')[0] : nickname}</Text>
			</Container>
			<TextT>New updates for you</TextT>
		</Container>
	)
})