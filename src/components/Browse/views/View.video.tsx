import React, { FC, useState } from 'react'
import Carousel from 'react-native-snap-carousel'
import Video from 'react-native-video'

import { Container } from '../../common/utils/layout'
import { TextT } from '../../common/utils/typography'

import { IBrowseView } from '../../../interfaces/browse/IBrowse'

import { IP } from '../../../env'

export const ViewVideo: FC<IBrowseView> = ({ data, title }) => {
    
    const [play, setPlay] = useState(0)
    
    return (
        <>
        <Container p='10px' justify='flex-start'>
            <TextT>{title}</TextT>
        </Container>
        <Carousel 
            data={data}
            renderItem={({ item, index }) => 
                <Video 
                    controls 
                    // paused={play === index ? false : true}
                    paused={true} 
                    style={{
                        width: 390,
                        height: 200
                    }}
                    source={{ uri: `${IP}/static/${item._id}.mp4` }} 
                />
            }
            itemWidth={390}
            itemHeight={200}
            sliderWidth={390}

            onSnapToItem={i => setPlay(i)}
        />
        </>        
    )
}