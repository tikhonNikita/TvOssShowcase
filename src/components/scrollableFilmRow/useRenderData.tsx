import {Film} from '../../items'
import {useCallback, useContext, useMemo} from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../rootNavigator'
import {useNavigation} from '@react-navigation/native'
import {MainScrollContext} from '../../screens/HomeScreen/homeScreen'

export type RenderItem = {
  title: string
  uri: string
  onFocus: () => void
  onPress: () => void
  type: 'film' | 'seeMore'
  requireFocus: boolean
}

type RawData = {
  isHorizontal: boolean
  films: Film[]
  onItemFocus: (index: number) => void
  isFirstOnScreen: boolean
  setTrapLeft: (value: boolean) => void
  scrollPosition: number
}

type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>
export const useRenderData = ({
  films,
  onItemFocus,
  setTrapLeft,
  isFirstOnScreen,
  isHorizontal,
  scrollPosition,
}: RawData): RenderItem[] => {
  const {scrollRef, activeIndex} = useContext(MainScrollContext)

  const handleItemFocus = useCallback(
    (index: number) => {
      if (activeIndex !== null && activeIndex?.current !== scrollPosition) {
        activeIndex.current = scrollPosition
        scrollRef?.current?.scrollTo({
          x: 0,
          y: scrollPosition * 320,
          animated: true,
        })
      }
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
    navigation.navigate('List')
  }, [navigation])

  return useMemo(() => {
    return films.map((film, index) => {
      const type =
        index === films.length - 1 && isHorizontal ? 'seeMore' : 'film'
      return {
        type,
        onPress: type === 'seeMore' ? onPress : () => {},
        title: film.title,
        uri: film.url,
        onFocus: () => handleItemFocus(index),
        requireFocus: isFirstOnScreen && index === 0,
      }
    })
  }, [films, handleItemFocus, isFirstOnScreen, isHorizontal, onPress])
}
