import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {DetailsScreen, HomeScreen} from './screens'

const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
  Home: undefined
  Details: undefined
}

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}
