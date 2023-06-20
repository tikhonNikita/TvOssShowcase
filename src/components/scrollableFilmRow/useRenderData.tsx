import {Film} from '../../items'
import {useCallback, useMemo} from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../rootNavigator'
import {useNavigation} from '@react-navigation/native'

export type RenderItem = {
  title: string
  uri: string
  onFocus: () => void
  onPress: () => void
  type: 'film' | 'seeMore'
  requireFocus: boolean
}

type RawData = {
  films: Film[]
  onItemFocus: (index: number) => void
  isFirstOnScreen: boolean
  setTrapLeft: (value: boolean) => void
}

type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>
export const useRenderData = ({
  films,
  onItemFocus,
  setTrapLeft,
  isFirstOnScreen,
}: RawData): RenderItem[] => {
  const handleItemFocus = useCallback(
    (index: number) => {
      onItemFocus(index)
      if (index > 0) {
        setTrapLeft(true)
      } else {
        setTrapLeft(false)
      }
    },
    [onItemFocus, setTrapLeft],
  )

  const navigation = useNavigation<HomeScreenNavProp>()

  const onPress = useCallback(() => {
    navigation.navigate('Details')
  }, [navigation])

  return useMemo(() => {
    return films.map((film, index) => {
      const type = index === films.length - 1 ? 'seeMore' : 'film'
      return {
        type,
        onPress: type === 'seeMore' ? onPress : () => {},
        title: film.title,
        uri: film.url,
        onFocus: () => handleItemFocus(index),
        requireFocus: isFirstOnScreen && index === 0,
      }
    })
  }, [films, handleItemFocus, isFirstOnScreen, onPress])
}
