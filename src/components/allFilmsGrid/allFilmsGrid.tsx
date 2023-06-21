import React from 'react'
import {cartoons, films} from '../../items'
import {FocusHolder} from '../scrollableFilmRow/focusHolder'
import {useWindowDimensions} from 'react-native'
import {AllFilmsScrollGrid} from './allFilmsScrollGrid'

type Props = {}

const manyItems = [...films, ...cartoons]

export const AllFilmsGrid: React.FC<Props> = () => {
  const {width} = useWindowDimensions()
  const numColumns = Math.floor(width / 200)
  return (
    <FocusHolder isFirstOnScreen={true}>
      <AllFilmsScrollGrid key={1} items={manyItems} numColumns={numColumns} />
    </FocusHolder>
  )
}
