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

type Props = {items: Film[]}
export const ScrollableFilmRow: FC<Props> = ({items}) => {
  const scroll = useSharedValue(0)
  const prevIndex = useSharedValue(0)
  const aref = useAnimatedRef<any>()

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

        return
      }
      scroll.value = withTiming((index - 0.6) * CARD_SIZE, {
        duration: 200,
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
  })

  return (
    <Animated.FlatList
      showsHorizontalScrollIndicator={false}
      initialNumToRender={7}
      maxToRenderPerBatch={7}
      windowSize={2}
      ref={aref}
      renderItem={renderItem}
      data={data}
      horizontal
      scrollEnabled={false}
      getItemLayout={getItemLayout}
      keyExtractor={keyExtractor}
    />
  )
}

ScrollableFilmRow.whyDidYouRender = true
