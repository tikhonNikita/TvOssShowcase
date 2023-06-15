import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {RootNavigator} from './src/rootNavigator'

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App
