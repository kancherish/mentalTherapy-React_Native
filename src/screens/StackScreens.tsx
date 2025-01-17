import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IntroS1 from './introScreens/IntroS1'
import IntroS2 from './introScreens/IntroS2'
import IntroS3 from './introScreens/IntroS3'
import IntroS4 from './introScreens/IntroS4'
import IntroS5 from './introScreens/IntroS5'
import Login from './Login'

const Stack = createNativeStackNavigator()

const StackScreens = () => {
  const IntroScreens = () => {
    return (<>
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
    </>)
  }

  const userAuthScreens = ()=>{
    return (
      <>
      <Stack.Screen 
      name="login"
      component={Login}
      />
      </>
    )
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 350
      }}>
      {IntroScreens()}
      {userAuthScreens()}
    </Stack.Navigator>
  )
}

export default StackScreens