import {useNavigation} from '@react-navigation/native'
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import * as React from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../rootNavigator'
import {films} from '../../items'
import {AllFilms} from '../../components'
import {FC} from 'react'
import {BaseView, RawView} from 'theme'
import Icon from 'react-native-vector-icons/FontAwesome'

export const HomeScreen = () => {
  return (
    <BaseView
      backgroundColor={'white'}
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
