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
        <RawView
          style={{
            width: 40,
            height: '100%',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 10,
            paddingTop: 20,
          }}>
          <TouchableOpacity>
            <Icon name="rocket" size={30} color="#900" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="home" size={30} color="#900" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="star" size={30} color="#900" />
          </TouchableOpacity>
        </RawView>
        <RootNavigator />
      </BaseView>
    </NavigationContainer>
  )
}

export default App
