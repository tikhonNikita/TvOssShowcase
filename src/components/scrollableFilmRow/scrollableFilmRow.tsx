import React, {FC, useCallback} from 'react'
import Animated, {
  runOnJS,
  runOnUI,
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {FilmCard} from '../filmCard/filmCard'
import {TVFocusGuideView} from 'react-native'
import {Film} from '../../items'

const CARD_SIZE = 200

const getItemLayout = (
  _: number,
  index: number,
): {length: number; offset: number; index: number} => {
  return {length: CARD_SIZE, offset: CARD_SIZE * index, index}
}

type Props = {isFirst?: boolean; items: Film[]}

export const ScrollableFilmRow: FC<Props> = ({isFirst = false, items}) => {
  const scroll = useSharedValue(0)
  const prevIndex = useSharedValue(0)
  const aref = useAnimatedRef<any>()
  const [isFistActive, setIsFirstActive] = React.useState(true)

  useAnimatedReaction(
    () => scroll.value,
    value => {
      scrollTo(aref, value, 0, true)
    },
  )

  const onItemFocus = useCallback(
    (index: number) => {
      if (prevIndex.value === 0 && index === 1) {
        scroll.value = withTiming(CARD_SIZE / 1.5, {duration: 200})
        prevIndex.value = index
        setIsFirstActive(false)

        return
      }
      scroll.value = withTiming((index - 0.6) * CARD_SIZE, {
        duration: 200,
      })

      prevIndex.value = index
      if (index === 0) {
        setIsFirstActive(true)
      }
    },
    [prevIndex, scroll],
  )

  const renderItem = useCallback(
    ({index}: any) => {
      return (
        <FilmCard
          uri={items[index].url}
          title={`${items[index].title}`}
          onFocus={() => onItemFocus(index)}
          requireFocus={index === 0 && isFirst}
        />
      )
    },
    [isFirst, items, onItemFocus],
  )

  return (
    <TVFocusGuideView
      hasTVPreferredFocus={isFirst}
      trapFocusUp={isFirst}
      trapFocusLeft={!isFistActive}
      trapFocusRight={true}
      autoFocus={true}>
      <Animated.FlatList
        initialNumToRender={7}
        ref={aref}
        renderItem={renderItem}
        data={items}
        horizontal
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
      />
    </TVFocusGuideView>
  )
}

ScrollableFilmRow.whyDidYouRender = true
