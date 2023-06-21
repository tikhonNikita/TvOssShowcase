import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {RootNavigator} from './src/rootNavigator'
import {BaseView} from 'theme'
import {StyleSheet} from 'react-native'

function App() {
  return (
    <NavigationContainer>
      <BaseView style={s.container}>
        <RootNavigator />
      </BaseView>
    </NavigationContainer>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
})

export default App
