import { BaseSyntheticEvent, useCallback, useState } from "react"
import { NativeScrollEvent } from "react-native"

export const useStatusBar = () => {

    const [isBlack, setIsBlack] = useState(false)

    const handleStatusBarBg = useCallback((event: BaseSyntheticEvent<NativeScrollEvent>) => {
        const { y } = event.nativeEvent.contentOffset

        y > 400 ? setIsBlack(true) : setIsBlack(false)

    }, [])

    return { handleStatusBarBg, isBlack }
}