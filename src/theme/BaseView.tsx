import styled from 'styled-components/native'

type BaseViewProps = {
  backgroundColor?: string
  flex?: number
  flexDirection?: 'row' | 'column'
}
export const BaseView = styled.View<BaseViewProps>(props => ({
  backgroundColor: props.backgroundColor ?? 'gray',
  flex: props.flex,
  flexDirection: props.flexDirection,
}))

export const RawView = styled.View({
  width: 40,
  height: '100%',
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 10,
  paddingTop: 20,
})
