import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'


export const useOrientation = () => {
    const [screenHeight] = useState(Dimensions.get('screen').height)
    const [isLandskape, setIsLandskape] = useState()

    useEffect(() => {
        Dimensions.addEventListener('change', () => {
            if(Dimensions.get('screen').height < screenHeight) {
                setIsLandskape(true)
            } else {
                setIsLandskape(false)
            }
        })
        return () => Dimensions.removeEventListener('change')
    }, [screenHeight])


    return { isLandskape }
}