import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { Container } from '../common/utils/layout'
import { Button } from '../common/styled/buttons/buttons.shared'

import { Progress } from './Progress'

import { usePlayer } from '../../hooks/player/usePlayer'

import { RootState } from '../../redux/rootReducer'

interface IControlProps {
    onSeek: () => void
    unlockFs: () => void
    lockFs: () => void
}

export const Control: FC<IControlProps> = ({ onSeek, unlockFs, lockFs }) => {

    const { playStopPlayer } = usePlayer()
    const navigation = useNavigation()

    const player = useSelector((state: RootState) => state.player.player)

    return (
        <Container 
            style={{ 
                position: 'absolute', 
                top: 0 
            }} 
            h='100%'
            direction='column'
        >
            <Container h='25%' justify='flex-end' w='90%'>
                <Button  
                    iconName='settings'
                    iconSize={20}
                    bgColor=''
                    text=''
                    w='50px'
                    h='100%' 
                    onPress={() => navigation.navigate('PlayerModal')}
                />
            </Container>
            <Container h='50%'>
                <Button 
                    iconName={player.isPlaying ? 'pause' : 'play'} 
                    iconSize={65} 
                    w='100px' 
                    h='100px' 
                    bgColor='' 
                    text='' 
                    onPress={() => playStopPlayer()}
                />
            </Container>
            <Container h='25%' w='100%' justify='space-between'>
                <Progress onSeek={onSeek} />
                {
                    player.isLock
                    ?   <Button 
                            iconName='lock-open'
                            iconSize={20}
                            bgColor=''
                            text=''
                            w='50%'
                            h='100%'
                            onPress={() => unlockFs()}
                        />
                    :   <Button 
                            iconName='screen-rotation-lock'
                            iconSize={20}
                            bgColor=''
                            text=''
                            w='50%'
                            h='100%'
                            onPress={() => lockFs()}
                        />
                }
                
            </Container>
        </Container>
    )
}