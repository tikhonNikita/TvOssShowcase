import React, {FC} from 'react'
import {BaseView} from 'theme'
import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'

type Props = {
  title: string
  focused: boolean
  uri: string
  onFocus: () => void
  onBlur: () => void
  requireFocus: boolean
}

const _FilmCard: FC<Props> = ({
  title,
  onFocus,
  onBlur,
  requireFocus,
  uri,
  focused,
}) => {
  return (
    <CardContainer
      onFocus={onFocus}
      onBlur={onBlur}
      hasTVPreferredFocus={requireFocus}
      focused={focused}>
      <ContentContainer>
        <FastImage
          style={{width: 192, height: 200}}
          source={{
            uri: uri,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Title> {title} </Title>
      </ContentContainer>
    </CardContainer>
  )
}

export const FilmCard = React.memo(_FilmCard)

type ContainerProps = {
  focused: boolean
}
const CardContainer = styled.Pressable<ContainerProps>(props => ({
  width: 200,
  height: 300,
  borderColor: props.focused ? 'red' : 'transparent',
  borderWidth: 3,
}))

const Title = styled.Text({
  fontSize: 20,
  height: 92,
  width: 200,
  color: 'black',
  textAlign: 'center',
})

const ContentContainer = styled(BaseView)({
  backgroundColor: 'lightgrey',
})
