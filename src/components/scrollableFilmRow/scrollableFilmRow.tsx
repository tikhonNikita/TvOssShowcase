import React, {useCallback} from 'react'
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {FilmCard} from '../filmCard/filmCard'

const CARD_SIZE = 200

const items = new Array(50).map((_, index) => index)

export const ScrollableFilmRow = () => {
  const scroll = useSharedValue(0)
  const prevIndex = useSharedValue(0)
  const aref = useAnimatedRef<any>()

  useAnimatedReaction(
    () => scroll.value,
    value => {
      scrollTo(aref, value, 0, false)
    },
  )

  const onItemFocus = useCallback(
    (index: number) => {
      'worklet'

      if (prevIndex.value === 0 && index === 1) {
        scroll.value = withTiming(CARD_SIZE / 1.5, {duration: 100})
        prevIndex.value = index

        return
      }
      scroll.value = withTiming((index - 0.6) * CARD_SIZE, {
        duration: 100,
      })

      prevIndex.value = index
    },
    [prevIndex, scroll],
  )

  const renderItem = ({index}: any) => {
    return (
      <FilmCard title={`Film ${index}`} onFocus={() => onItemFocus(index)} />
    )
  }

  return (
    <Animated.FlatList
      ref={aref}
      renderItem={renderItem}
      data={items}
      horizontal
      scrollEnabled={false}
    />
  )
}
