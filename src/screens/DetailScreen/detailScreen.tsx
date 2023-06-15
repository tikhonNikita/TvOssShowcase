import {Text} from 'react-native'
import * as React from 'react'
import {BaseView} from 'theme'
import styled from 'styled-components/native'

export const DetailsScreen = () => {
  return (
    <DetailsView>
      <Text>Details Screen</Text>
    </DetailsView>
  )
}

const DetailsView = styled(BaseView)({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})
