import {useNavigation} from '@react-navigation/native'
import {Button, FlatList, ScrollView, Text} from 'react-native'
import * as React from 'react'
import {ContainerView} from 'theme'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../rootNavigator'
import {ScrollableFilmRow} from '../../components'

type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavProp>()
  return (
    <ScrollView>
      <Text>Home Screen</Text>

      <ScrollableFilmRow />
      <ScrollableFilmRow />
      <ScrollableFilmRow />
    </ScrollView>
  )
}
