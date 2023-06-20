import React, {useRef} from 'react'
import styled from 'styled-components/native'
import {BaseView} from 'theme'
import {useFocusEffect} from '@react-navigation/native'

type Props = {
  onFocus: () => void
  onPress: () => void
  onBlur: () => void
  focused: boolean
}

const _SeeMoreCard: React.FC<Props> = ({onPress, onFocus, onBlur, focused}) => {
  const ref = useRef<any>()

  useFocusEffect(() => {
    let timeout: number | null = null
    if (focused) {
      timeout = setTimeout(
        () => ref.current.setNativeProps({hasTVPreferredFocus: true}),
        5,
      )
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  })

  return (
    <CardContainer
      ref={ref}
      onPress={() => onPress()}
      onFocus={onFocus}
      onBlur={onBlur}
      focused={focused}>
      <ContentContainer>
        <Title>See more</Title>
      </ContentContainer>
    </CardContainer>
  )
}

export const SeeMoreCard = React.memo(_SeeMoreCard)

type ContainerProps = {
  focused: boolean
}
const CardContainer = styled.Pressable<ContainerProps>(props => ({
  width: 200,
  height: 300,
  borderColor: props.focused ? 'red' : 'transparent',
  borderWidth: 3,
}))

const ContentContainer = styled(BaseView)({
  width: '100%',
  height: '100%',
  backgroundColor: 'lightgrey',
  alignItems: 'center',
  justifyContent: 'center',
})
const Title = styled.Text({
  fontSize: 20,
  height: 92,
  width: 200,
  color: 'black',
  textAlign: 'center',
})
