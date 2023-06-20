import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {RootNavigator} from './src/rootNavigator'
import {BaseView, RawView} from 'theme'
import Icon from 'react-native-vector-icons/FontAwesome'
import {TouchableOpacity} from 'react-native'

function App() {
  return (
    <NavigationContainer>
      <BaseView
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <RootNavigator />
      </BaseView>
    </NavigationContainer>
  )
}

export default App
