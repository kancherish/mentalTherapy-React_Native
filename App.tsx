import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/screens/Login'
import StackScreens from './src/screens/StackScreens'

const App = () => {

  const Stack = createNativeStackNavigator()

  return (

    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
      <StackScreens />
      </NavigationContainer>

    </SafeAreaProvider>

  )
}

export default App

const styles = StyleSheet.create({})