import {useNavigation} from '@react-navigation/native'
import {Button, Text} from 'react-native'
import * as React from 'react'
import {BaseView} from 'theme'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../rootNavigator'

type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavProp>()
  return (
    <BaseView>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </BaseView>
  )
}
