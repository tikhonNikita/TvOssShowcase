import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {DetailsScreen, HomeScreen, ListScreen} from './screens'

const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
  Home: undefined
  Details: undefined
  List: undefined
}

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  )
}
