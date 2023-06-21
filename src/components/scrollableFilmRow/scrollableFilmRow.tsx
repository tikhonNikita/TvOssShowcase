import React, {FC, useCallback, useContext} from 'react'
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {FlatList, ListRenderItem, StyleProp, ViewStyle} from 'react-native'
import {Film} from '../../items'
import {RenderItem, useRenderData} from './useRenderData'
import {FocusManagementContext} from './focusHolder'
import {FilmCardContainer} from '../filmCard/filmCardContainer'

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
  horizontal?: boolean
  numColumns?: number
  initialNumToRender?: number
  maxToRenderPerBatch?: number
  windowSize?: number
  contentContainerStyle?: StyleProp<ViewStyle>
}

export const ScrollableFilmRow: FC<Props> = ({
  items,
  horizontal = true,
  numColumns,
  initialNumToRender,
  maxToRenderPerBatch,
  windowSize,
  contentContainerStyle,
}) => {
  const scroll = useSharedValue(0)
  const prevIndex = useSharedValue(0)
  const aref = useAnimatedRef<any>()

  useAnimatedReaction(
    () => scroll.value,
    value => {
      if (horizontal) {
        scrollTo(aref, value, 0, true)
      } else {
        scrollTo(aref, 0, value, true)
      }
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

  const onGridItemFocus = useCallback(
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

  const data = useRenderData({
    films: items,
    onItemFocus: horizontal ? onItemFocus : onGridItemFocus,
    isFirstOnScreen,
    setTrapLeft,
    isHorizontal: horizontal,
  })

  return (
    <Animated.FlatList
      numColumns={numColumns}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      initialNumToRender={initialNumToRender}
      maxToRenderPerBatch={maxToRenderPerBatch}
      windowSize={windowSize}
      ref={aref}
      contentContainerStyle={contentContainerStyle}
      renderItem={renderItem}
      data={data}
      horizontal={horizontal}
      scrollEnabled={false}
      getItemLayout={getItemLayout}
      keyExtractor={keyExtractor}
    />
  )
}

ScrollableFilmRow.whyDidYouRender = true
