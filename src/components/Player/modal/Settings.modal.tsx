import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../../common/styled/buttons/buttons.shared'
import { ModalCard } from '../../common/styled/cards/cards.shared'

import { setOption } from '../../../redux/player/actions'
import { RootState } from '../../../redux/rootReducer'

export const QualityModal: FC = () => {
    
    const dispatch = useDispatch()

    const videoTracks = useSelector((state: RootState) => state.player.tracks.video)

    return (    
        <ModalCard>
            {
                videoTracks.map(item => 
                    <Button 
                        bgColor=''
                        h='50px'
                        m='20px 10px'
                        w='100px'
                        text={item.height} 
                        key={item.height}
                        onPress={() => dispatch(setOption('quality', item.height))}
                    />
                )
            }
       </ModalCard>
    )
}

export const LanguageModal: FC = () => {

    const dispatch = useDispatch()
    
    const audioTracks = useSelector((state: RootState) => state.player.tracks.audio)

    return (
        <ModalCard>
           {
                audioTracks.map(item => 
                    <Button 
                        bgColor=''
                        h='50px'
                        m='20px 10px'
                        w='100px'
                        text={item.language} 
                        key={item.index}
                        onPress={() => dispatch(setOption('language', item.language))}
                    />
                )
            }
       </ModalCard>
    )
}