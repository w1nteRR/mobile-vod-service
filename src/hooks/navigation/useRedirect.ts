import { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"

export const useRedirect = () => {
  
  const navigation = useNavigation()

  const redirectToFilmScreen = useCallback((filmId: string) => {
    navigation.navigate('FilmRoot', {
      screen: 'Film',
      params: { filmId }
    })
  }, [])

  return {
    redirectToFilmScreen
  }
}