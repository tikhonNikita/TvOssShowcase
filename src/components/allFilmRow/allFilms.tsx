import React, {FC} from 'react'
import {FocusHolder} from '../scrollableFilmRow/focusHolder'
import {ScrollableFilmRow} from '../scrollableFilmRow/scrollableFilmRow'
import {Film} from '../../items'

type Props = {
  films: Film[]
  isFirstOnScreen?: boolean
}

export const AllFilms: FC<Props> = ({films, isFirstOnScreen = false}) => {
  return (
    <FocusHolder isFirstOnScreen={isFirstOnScreen}>
      <ScrollableFilmRow
        key={1}
        items={films}
        initialNumToRender={7}
        maxToRenderPerBatch={7}
        windowSize={2}
      />
    </FocusHolder>
  )
}
