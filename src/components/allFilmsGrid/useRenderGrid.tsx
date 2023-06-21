import {Film} from '../../items'
import {useCallback, useMemo} from 'react'

export type RenderItem = {
  title: string
  uri: string
  onFocus: () => void
  onPress: () => void
  type: 'film'
  requireFocus: boolean
}

type RawData = {
  films: Film[]
  onItemFocus: (index: number) => void
  isFirstOnScreen: boolean
  setTrapLeft: (value: boolean) => void
}

export const useRenderGrid = ({
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

  return useMemo(() => {
    return films.map((film, index) => {
      const type = 'film'
      return {
        type,
        onPress: () => {},
        title: film.title,
        uri: film.url,
        onFocus: () => handleItemFocus(index),
        requireFocus: isFirstOnScreen && index === 0,
      }
    })
  }, [films, handleItemFocus, isFirstOnScreen])
}
