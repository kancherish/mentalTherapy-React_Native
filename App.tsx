import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IntroS1 from './src/screens/introScreens/IntroS1'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IntroS2 from './src/screens/introScreens/IntroS2'
import IntroS3 from './src/screens/introScreens/IntroS3'
import IntroS4 from './src/screens/introScreens/IntroS4'
import IntroS5 from './src/screens/introScreens/IntroS5'

const App = () => {

  const Stack = createNativeStackNavigator()

  return (

    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            animationDuration: 350

          }}>
          <Stack.Screen
            name='intro1'
            component={IntroS1}
          />
          <Stack.Screen
            name='intro2'
            component={IntroS2}
          />
          <Stack.Screen
            name='intro3'
            component={IntroS3}
          />
          <Stack.Screen
            name='intro4'
            component={IntroS4}
          />
          <Stack.Screen
            name='intro5'
            component={IntroS5}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>

  )
}

export default App

const styles = StyleSheet.create({})