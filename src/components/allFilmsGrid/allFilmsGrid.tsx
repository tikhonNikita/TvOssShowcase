import React from 'react'
import {films} from '../../items'
import {FocusHolder} from '../scrollableFilmRow/focusHolder'
import {ScrollableFilmRow} from '../scrollableFilmRow/scrollableFilmRow'
import {useWindowDimensions} from 'react-native'

type Props = {}

export const AllFilmsGrid: React.FC<Props> = () => {
  const {width} = useWindowDimensions()
  const numColumns = Math.floor(width / 200)
  return (
    <FocusHolder isFirstOnScreen={true}>
      <ScrollableFilmRow
        key={1}
        items={films}
        horizontal={false}
        numColumns={numColumns}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      />
    </FocusHolder>
  )
}
