import { useEffect, useState } from "react"
import { Dimensions } from "react-native"
import Orientation, { removeOrientationListener } from "react-native-orientation"

export const useOrientation = () => {

    const [screenHeight] = useState(Dimensions.get('screen').height)
    const [orientation, setOrientation] = useState('')


    const _onDimensionsChange = () => {
        Dimensions.get('screen').height < screenHeight
        ?   setOrientation('landscape')
        :   setOrientation('portrait')
    }

    useEffect(() => {
        Dimensions.addEventListener('change', _onDimensionsChange)
        return () => Dimensions.removeEventListener('change', _onDimensionsChange)
    }, [screenHeight])

    // const d = Dimensions.get('screen').height

    // console.log(d)

    // const _orientationListener = (orientation: string) => {
    //     console.log(orientation)
    // }

    // useEffect(() => {
    // //    Orientation.getOrientation((err, orientation) => console.log(orientation))
    //     Orientation.addOrientationListener((o) => console.log(o))
    //     return () => {
    //         Orientation.removeOrientationListener(() => console.log('a'))
    //     }
    // }, [])

    return orientation
}