import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { ScrollContainer } from './Scroll.container'

import { Container } from '../../common/utils/layout'
import { Describe } from '../../common/utils/typography'
import { Button } from '../../common/styled/buttons/buttons.shared'


interface AboutProps {
    describe: string
    filmName: string
}

export const About = memo<AboutProps>(({
    describe,
    filmName
}) => {

    const navigation = useNavigation()

    return (
        <ScrollContainer
            title='About movie'
            right={<Button
                iconName='chevron-right'
                bgColor=''
                w='45px'
                h='45px'
                brRadius='10px'
                iconSize={20}
                onPress={() => navigation.navigate('About', { filmName })}
            />
            }
        >
            <Container wrap='wrap' w='90%'>
                <Container
                    m='0 0 10px'
                    p='20px'
                    style={{
                        borderRadius: 10,
                        borderWidth: .8,
                        borderColor: 'silver'
                    }}
                >
                    <Describe>{describe}</Describe>
                </Container>
                <Container justify='flex-start'>
                    {
                        icons.map((icon, index) =>
                            <Button key={index} {...btn} iconName={icon} />
                        )
                    }
                </Container>
            </Container>
        </ScrollContainer>
    )
})

const icons = [
    'subtitles',
    'hdr',
    'video-4k-box',
    'surround-sound-5-1'
]

const btn = {
    iconSize: 20,
    w: '50px',
    h: '50px',
    bgColor: '',
    brRadius: '10px'
}