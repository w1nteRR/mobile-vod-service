import { useCallback } from "react"
import { StackActions, useNavigation } from "@react-navigation/native"

export const useRedirect = () => {
  
  const navigation = useNavigation()

  const redirectToFilmScreen = useCallback((filmId: string) => {
    navigation.navigate('FilmRoot', {
      screen: 'Film',
      params: { filmId }
    })
  }, [])

  const pushToFilmScreen = useCallback((filmId: string) => {
    navigation.dispatch({
      ...StackActions.push('Film', { filmId })
    })
  }, [])

  return {
    redirectToFilmScreen,
    pushToFilmScreen
  }
}