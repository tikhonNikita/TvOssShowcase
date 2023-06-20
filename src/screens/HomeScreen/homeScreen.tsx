import {useNavigation} from '@react-navigation/native'
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import * as React from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../rootNavigator'
import {films} from '../../items'
import {AllFilms} from '../../components'
import {FC} from 'react'
import {BaseView} from 'theme'

const data = new Array(100).fill(0).map((_, i) => i)
const RenderItem: FC<{i: number}> = ({i}) => {
  console.log('RENDERED', i)
  return (
    <TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          padding: 10,
        }}>
        THIS IS ITEM{i}
      </Text>
    </TouchableOpacity>
  )
}
type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>
export const HomeScreen = () => {
  return (
    <BaseView backgroundColor={'white'}>
      <ScrollView>
        <Text
          style={{
            padding: 20,
            fontSize: 20,
            color: 'black',
          }}>
          Home Screen
        </Text>
        <AllFilms films={films} key={'33sas'} isFirstOnScreen />
        <Text
          style={{
            fontSize: 20,
            padding: 20,
            color: 'black',
          }}>
          Evening
        </Text>
        <AllFilms films={films} key={'33see'} />

        <Text
          style={{
            fontSize: 20,
            padding: 20,
            color: 'black',
          }}>
          Night
        </Text>
        <AllFilms films={films} key={'12see'} />
        {/*<ScrollableFilmRow key={2} />*/}
        {/*<ScrollableFilmRow key={3} />*/}
      </ScrollView>
    </BaseView>
  )
}
