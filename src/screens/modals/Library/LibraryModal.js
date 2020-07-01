import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'
import { ModalContainer, Container } from '../../../components/styled/screens'
import { MAIN, PRIMARY, DANGER } from '../../../components/styled/colors'

import { useWatchLater } from '../../../hooks/library/useWatchLater'

const LibraryModal = ({ route }) => {

    const [isWatchLater, setIsWatchLater] = useState(null)

    const navigation = useNavigation()    
    const { addToWatchLater, watchLaterStatus, removeFromWatchLater } = useWatchLater()

    useEffect(() => {
        const getStatus = async () => {
            try {
                const isWatchLater = await watchLaterStatus(route.params.filmId)
                
                setIsWatchLater(isWatchLater.watchLater)

            } catch (err) {
                console.log(err)
            }
        }

        getStatus()
    }, [route.params.filmId])

    return (
        <ModalContainer>
            <Container  
                h='40%'
                bgColor={MAIN}
                justfiy='flex-start'
                direction='column'
            >
                <SettingsBtnWrapper 
                    iconName='arrow-left'
                    onPress={() => navigation.goBack()}  
                />    
                {
                    isWatchLater === null
                    ? <SettingsBtnWrapper iconName='history' buttonText='loading...' />
                    : <SettingsBtnWrapper 
                        iconName='history'
                        iconColor={isWatchLater ? DANGER : PRIMARY}
                        buttonText={isWatchLater ? 'remove from watch later' : 'add to watch later'}
                        onPress={isWatchLater 
                            ? () => removeFromWatchLater(route.params.filmId, () => setIsWatchLater(false))
                            : () => addToWatchLater(route.params.filmId, () => setIsWatchLater(true))
                        }
                    />
                }
                
                <SettingsBtnWrapper 
                    iconName='playlist-plus'
                    iconColor='silver'
                    buttonText='add to playlist'  
                    onPress={() => navigation.navigate('PlaylistModal', {
                        filmId: route.params.filmId
                    })}  
                />    
            </Container>
        </ModalContainer>
    )
}

export default LibraryModal