import React, { FC } from 'react'

import { Text } from '../../common/utils/typography'
import { Container } from '../../common/utils/layout'
import { ScrollContainer } from './Scroll.container'
import { MAIN  } from '../../common/utils/colors'

interface IInfoProps {
    director: string
    release: string
    country: string
    company: string
    subtitles: Array<string>
    audio: Array<string>
}

export const Info: FC<IInfoProps> = ({ ...rest }) => {

    const _getSlicedInfo = () => {
        
        const restArr = Object.entries(rest)
        
        return {
            firstHalf: restArr.slice(0, 3),
            secondHalf: restArr.slice(3)
        }
    }

    const activeText = (text: any) => <Text uppercase m='10px'>{text}</Text>

    return (
        <ScrollContainer title='Info'>
            <Container>
                <Container direction='column' w='50%'>
                    {
                        _getSlicedInfo().firstHalf.map((item: any, index: number) => 
                            <Container direction='column' m='10px' p='10px' key={index}>
                                {activeText(Object.values(item[0]))}
                                <Text color={MAIN}>
                                    {Object.values(item[1])}
                                </Text>
                            </Container>
                        )
                    }
                </Container>
                <Container direction='column' w='50%'>
                    {
                        _getSlicedInfo().secondHalf.map((item: any, index: number) => 
                            <Container direction='column' m='10px' p='10px' key={index}>
                                {activeText(Object.values(item[0]))}
                                <Text color={MAIN}>
                                    {Object.values(item[1] + '')}
                                </Text>
                            </Container>
                        )
                    }
                </Container>
            </Container>
        </ScrollContainer>
    )
}


