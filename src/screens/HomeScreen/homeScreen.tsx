import {useNavigation} from '@react-navigation/native'
import {ScrollView, Text} from 'react-native'
import * as React from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../rootNavigator'
import {ScrollableFilmRow} from '../../components'
import {films} from '../../items'

type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>
export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavProp>()
  return (
    <ScrollView>
      <Text
        style={{
          padding: 20,
          fontSize: 20,
          color: 'black',
        }}>
        Home Screen
      </Text>
      <ScrollableFilmRow key={1} isFirst items={films} />
      {/*<ScrollableFilmRow key={2} />*/}
      {/*<ScrollableFilmRow key={3} />*/}
    </ScrollView>
  )
}
