import React, {FC, useEffect} from 'react'
import {BaseView} from 'theme'
import styled from 'styled-components/native'

type Props = {
  title: string
  uri: string
  onFocus: () => void
  requireFocus: boolean
}
const _FilmCard: FC<Props> = ({title, onFocus, requireFocus, uri}) => {
  const [focused, setFocused] = React.useState(false)
  const handleFocus = () => {
    onFocus()
    setFocused(true)
  }

  return (
    <CardContainer
      onFocus={handleFocus}
      onBlur={() => setFocused(false)}
      hasTVPreferredFocus={requireFocus}
      focused={focused}>
      <ContentContainer>
        <Poster
          source={{
            uri,
          }}
        />
        <Title> {title} </Title>
      </ContentContainer>
    </CardContainer>
  )
}

export const FilmCard = React.memo(_FilmCard, (prev, next) => {
  return prev.requireFocus === next.requireFocus, prev.title === next.title
})

FilmCard.whyDidYouRender = true

type ConainerProps = {
  focused: boolean
}
const CardContainer = styled.Pressable<ConainerProps>(props => ({
  width: 200,
  height: 300,
  borderColor: props.focused ? 'red' : 'transparent',
  borderWidth: 4,
}))

const Poster = styled.Image({
  width: 192,
  height: 200,
})

const Title = styled.Text({
  fontSize: 20,
  height: 92,
  width: 200,
  color: 'black',
  textAlign: 'center',
})

const ContentContainer = styled(BaseView)({
  backgroundColor: 'white',
})
