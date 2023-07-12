import React, {FC, useCallback, useContext} from 'react'
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {FlatList, ListRenderItem} from 'react-native'
import {Film} from '../../items'
import {RenderItem, useRenderData} from './useRenderData'
import {FocusManagementContext} from './focusHolder'
import {FilmCardContainer} from '../filmCard/filmCardContainer'

const CARD_SIZE = 200
const getItemLayout: FlatList['props']['getItemLayout'] = (
  _: unknown,
  index: number,
): {length: number; offset: number; index: number} => {
  return {length: CARD_SIZE, offset: CARD_SIZE * index, index}
}

const renderItem: ListRenderItem<RenderItem> = ({item}) => {
  return (
    <FilmCardContainer
      type={item.type}
      onPress={item.onPress}
      uri={item.uri}
      title={item.title}
      onFocus={item.onFocus}
      requireFocus={item.requireFocus}
    />
  )
}

const keyExtractor = (item: RenderItem, index: number) =>
  `${item.title}-${index}`

type Props = {
  items: Film[]
  scrollPosition?: number
}

export const ScrollableFilmRow: FC<Props> = ({items, scrollPosition = 0}) => {
  const scroll = useSharedValue(0)
  const prevIndex = useSharedValue(0)
  const aref = useAnimatedRef<Animated.FlatList<RenderItem>>()

  useAnimatedReaction(
    () => scroll.value,
    value => {
      scrollTo(aref, value, 0, false)
    },
  )

  const onItemFocus = useCallback(
    (index: number) => {
      if (prevIndex.value === 0 && index === 1) {
        scroll.value = withTiming(CARD_SIZE / 1.5, {duration: 0})
        prevIndex.value = index

        return
      }
      scroll.value = withTiming((index - 0.6) * CARD_SIZE, {
        duration: 0,
      })

      prevIndex.value = index
    },
    [prevIndex, scroll],
  )

  const {isFirstOnScreen, setTrapLeft} = useContext(FocusManagementContext)

  const data = useRenderData({
    films: items,
    onItemFocus,
    isFirstOnScreen,
    setTrapLeft,
    scrollPosition,
  })

  return (
    <Animated.FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      initialNumToRender={7}
      maxToRenderPerBatch={7}
      windowSize={2}
      ref={aref}
      renderItem={renderItem}
      data={data}
      horizontal={true}
      scrollEnabled={false}
      getItemLayout={getItemLayout}
      keyExtractor={keyExtractor}
    />
  )
}

ScrollableFilmRow.whyDidYouRender = true
