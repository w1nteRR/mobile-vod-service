import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { PlayerContext } from '../../../reducers/Player'


const Play = () => {

    const { playerState, playerDispatch } = useContext(PlayerContext)

    return (
       <>
        {
            playerState.isPlaying
            ?   <Icon 
                    size={55} 
                    color="#fff" 
                    name="pause" 
                    onPress={() => playerDispatch({
                        type: 'togglePlaying'
                    })}
                />
            
            :   <Icon 
                    size={55} 
                    color="#fff" 
                    name="play-arrow" 
                    onPress={() => playerDispatch({
                        type: 'togglePlaying'
                    })}
                />
        }
       </>
    )
}

export default Play