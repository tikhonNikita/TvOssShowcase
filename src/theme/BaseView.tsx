import styled from 'styled-components/native'

export const BaseView = styled.View(props => ({
  backgroundColor: props.backgroundColor ?? 'gray',
}))

export const RawView = styled.View({})
