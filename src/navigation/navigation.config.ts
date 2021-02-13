import { CardStyleInterpolators } from "@react-navigation/stack"

export const navigationConfig = {
  signIn: {
    header: () => null
  },
  filmRoot: {
    header: () => null,
    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
  },
  profileRoot: {
    header: () => null,
    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
  },
  searchRoot: {
    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
  },
  modal: {
    cardStyle: {
      backgroundColor: 'transparent'
    },
    header: () => null
  }
}