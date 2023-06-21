import React, {FC} from 'react'
import {FocusHolder} from '../scrollableFilmRow/focusHolder'
import {ScrollableFilmRow} from '../scrollableFilmRow/scrollableFilmRow'
import {Film} from '../../items'

type Props = {
  films: Film[]
  isFirstOnScreen?: boolean
  scrollPosition: number
}

export const AllFilms: FC<Props> = ({
  films,
  isFirstOnScreen = false,
  scrollPosition,
}) => {
  return (
    <FocusHolder isFirstOnScreen={isFirstOnScreen}>
      <ScrollableFilmRow
        scrollPosition={scrollPosition}
        key={1}
        items={films}
      />
    </FocusHolder>
  )
}
