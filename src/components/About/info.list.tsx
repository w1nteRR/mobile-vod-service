import React, { FC } from 'react'

import { Container } from '../common/utils/layout'
import { Text, TextT } from '../common/utils/typography'

export const InfoList: FC<{ [key: string]: string }> = ({
    ...rest
}) => 
    <Container direction='column' style={{ borderRadius: 10 }}>
    {
        Object.entries(rest).map((item, index) =>
            <Container 
                key={index} 
                justify='space-between' 
                p='20px' 
            >
                <TextT>
                    {item[0].charAt(0).toUpperCase() + item[0].slice(1)}
                </TextT>
                <Text 
                    size='11px' 
                    weight='bold'
                    color='#fff'
                    style={{
                        maxWidth: 250
                    }}
                >
                    {item[1]}
                </Text>
            </Container>
        )
    }
    </Container>