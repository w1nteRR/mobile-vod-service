import React, { FC, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button } from '../common/styled/buttons/buttons.shared'
import { MAIN, PRIMARY } from '../common/utils/colors'
import { Container } from '../common/utils/layout'
import { Text } from '../common/utils/typography'

export const Test:FC = () => {

    const genres =  [
        {
            title: 'Action',
            sub: [
                'Superhero',
                'Comedy',
                'Thriller',
                'Adventure',
                'Spy'
            ]
        },
        {
            title: 'Comedy'
        },
        {
            title: 'Family'
        },
        {
            title: 'Drama'
        },
        {
            title: 'Sci-fi'
        }
    ]
    
    const [active, setActive] = useState<null | string>(null)

    const activeSub = () => genres.filter(genr => genr.title === active)[0]

    const ActiveContainer = () => {
        return (
            <Container justify='space-around'>
                {/* <Button iconName='close' bgColor='danger' w='35px' h='35px' brRadius='10px' m='10px' /> */}
                <Container style={{
                    borderColor: PRIMARY,
                    borderWidth: 1,
                    borderRadius: 13,
                }}>
                    <Container w='75px' p='10px' bgColor={PRIMARY} style={{ borderRadius: 10 }}>
                        <Text 
                            weight='bold'
                            onPress={() => setActive(null)}
                        >
                            {active}
                        </Text>
                    </Container>
                    <ScrollView horizontal style={{ height: '100%' }}>                        
                        {activeSub().sub!.map(sub => 
                            <Text key={sub} m='0 20px'>{sub}</Text>
                        )}
                    </ScrollView>
                </Container>
            </Container>
        )
    }

    return (
        <Container direction='column'>
            <Container>
            {
               active
               ?  <ActiveContainer />
               :    genres.map((genr, index) => 
                <Text 
                    key={genr.title} 
                    m='10px' 
                    size='16px'
                    onPress={() => setActive(genr.title)}
                >
                    {genr.title}
                </Text>
           )
            }
            </Container>
        </Container>
    )
}