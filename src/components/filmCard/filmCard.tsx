import React, {FC} from 'react'
import {BaseView} from 'theme'
import styled from 'styled-components/native'

type Props = {
  title: string
  onFocus: () => void
}
export const FilmCard: FC<Props> = ({title, onFocus}) => {
  const [focused, setFocused] = React.useState(false)
  const handleFocus = () => {
    onFocus()
    setFocused(true)
  }
  return (
    <CardContainer
      onFocus={handleFocus}
      onBlur={() => setFocused(false)}
      focused={focused}>
      <ContentContainer>
        <Poster
          source={{
            uri: 'https://fastly.picsum.photos/id/297/200/200.jpg?hmac=elahxndleNOPlIfCfcZuJFmS-MkvvkXnQozwsyqF-FU',
          }}
        />
        <Title> {title} </Title>
      </ContentContainer>
    </CardContainer>
  )
}

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
