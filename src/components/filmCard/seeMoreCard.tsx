import React, {useRef} from 'react'
import styled from 'styled-components/native'
import {BaseView} from 'theme'
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import {View} from 'react-native'

type Props = {
  onFocus: () => void
  onPress: () => void
  onBlur: () => void
  focused: boolean
}

const _SeeMoreCard: React.FC<Props> = ({onPress, onFocus, onBlur, focused}) => {
  const ref = useRef<View>(null)
  const wasFocusedRef = useRef<boolean>(false)
  const subscriptionRef = useRef<() => void>()
  const navigation = useNavigation()

  useFocusEffect(() => {
    let timeout: number | null = null
    // workaround to save focus after navigation from previous screen as current FocusHolder doesn't support it
    if (wasFocusedRef.current) {
      timeout = setTimeout(() => {
        ref?.current?.setNativeProps({hasTVPreferredFocus: true})
        wasFocusedRef.current = false
        subscriptionRef.current?.()
      }, 5)
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  })

  const handlePress = () => {
    subscriptionRef.current = navigation.addListener('blur', () => {
      wasFocusedRef.current = true
    })
    onPress()
  }

  return (
    <CardContainer
      ref={ref}
      onPress={handlePress}
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
