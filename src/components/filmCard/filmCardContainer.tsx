import React, {FC, useCallback} from 'react'
import {FilmCard} from './filmCard'

type Props = {
  title: string
  uri: string
  onFocus: () => void
  requireFocus: boolean
}
export const FilmCardContainer: FC<Props> = ({
  title,
  onFocus,
  requireFocus,
  uri,
}) => {
  const [focused, setFocused] = React.useState(false)
  const handleFocus = useCallback(() => {
    onFocus()
    setFocused(true)
  }, [onFocus])

  const onBlur = useCallback(() => setFocused(false), [])

  return (
    <FilmCard
      focused={focused}
      uri={uri}
      requireFocus={requireFocus}
      onFocus={handleFocus}
      onBlur={onBlur}
      title={title}
    />
  )
}
