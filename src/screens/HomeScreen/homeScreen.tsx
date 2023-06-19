import {useNavigation} from '@react-navigation/native'
import {ScrollView, Text, TVFocusGuideView} from 'react-native'
import * as React from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../rootNavigator'
import {ScrollableFilmRow} from '../../components'

type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavProp>()
  return (
    <ScrollView>
      <Text>Home Screen</Text>

      <TVFocusGuideView
        trapFocusLeft={true}
        trapFocusRight={true}
        key={1}
        autoFocus={true}>
        <ScrollableFilmRow />
      </TVFocusGuideView>
      <TVFocusGuideView
        trapFocusLeft={true}
        trapFocusRight={true}
        key={2}
        autoFocus={true}>
        <ScrollableFilmRow />
      </TVFocusGuideView>
      <TVFocusGuideView
        trapFocusLeft={true}
        trapFocusRight={true}
        key={3}
        autoFocus={true}>
        <ScrollableFilmRow />
      </TVFocusGuideView>
    </ScrollView>
  )
}
