import React, {FC, useCallback} from 'react'
import {FilmCard} from './filmCard'
import {SeeMoreCard} from './seeMoreCard'

type Props = {
  title: string
  uri: string
  onFocus: () => void
  onPress: () => void
  requireFocus: boolean
  type: 'film' | 'seeMore'
}
export const FilmCardContainer: FC<Props> = ({
  title,
  onFocus,
  requireFocus,
  uri,
  type,
  onPress,
}) => {
  const [focused, setFocused] = React.useState(false)
  const handleFocus = useCallback(() => {
    onFocus()
    setFocused(true)
  }, [onFocus])

  const onBlur = useCallback(() => setFocused(false), [])

  if (type === 'seeMore') {
    return (
      <SeeMoreCard
        onFocus={handleFocus}
        onPress={onPress}
        onBlur={onBlur}
        focused={focused}
      />
    )
  }

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
