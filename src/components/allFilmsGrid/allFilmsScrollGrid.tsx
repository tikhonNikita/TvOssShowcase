import React, {FC, useCallback, useContext} from 'react'
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {FlatList, ListRenderItem, StyleSheet} from 'react-native'
import {Film} from '../../items'
import {FilmCardContainer} from '../filmCard/filmCardContainer'
import {FocusManagementContext} from '../scrollableFilmRow/focusHolder'
import {RenderItem, useRenderGrid} from './useRenderGrid'

const CARD_SIZE = 200
const CARD_HEIGHT = 300

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
  numColumns?: number
  initialNumToRender?: number
  maxToRenderPerBatch?: number
  windowSize?: number
}

export const AllFilmsScrollGrid: FC<Props> = ({items, numColumns}) => {
  const scroll = useSharedValue(0)
  const prevIndex = useSharedValue(0)
  const aref = useAnimatedRef<any>()

  useAnimatedReaction(
    () => scroll.value,
    value => {
      scrollTo(aref, 0, value, true)
    },
  )

  const onItemFocus = useCallback(
    (index: number) => {
      if (!numColumns) {
        throw 'numColumns is not defined'
      }
      const rowNum = Math.floor(index / numColumns)
      const firstInRow = rowNum * numColumns
      const finalIndex = firstInRow + 1
      scroll.value = withTiming((finalIndex / numColumns - 0.9) * CARD_HEIGHT, {
        duration: 200,
      })

      prevIndex.value = finalIndex
    },
    [numColumns, prevIndex, scroll],
  )

  const {isFirstOnScreen, setTrapLeft} = useContext(FocusManagementContext)

  const data = useRenderGrid({
    films: items,
    onItemFocus,
    isFirstOnScreen,
    setTrapLeft,
  })

  return (
    <Animated.FlatList
      numColumns={numColumns}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      initialNumToRender={12}
      maxToRenderPerBatch={12}
      ref={aref}
      contentContainerStyle={s.container}
      renderItem={renderItem}
      data={data}
      scrollEnabled={false}
      getItemLayout={getItemLayout}
      keyExtractor={keyExtractor}
    />
  )
}

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})
