import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import PlayScreen from '../screens/PlayScreen'
import PostGameScreen from '../screens/PostGameScreen'
import Rules from '../screens/Rules'
import Lobby from '../screens/Lobby'
import SettingsScreen from '../screens/SettingsScreen'
import ChangeScreen from '../screens/ChangeScreen'
import AudioScreen from '../screens/AudioScreen'
import EnviornmentChangeScreen from '../screens/EnviornementChangeScreen'

const Stack = createStackNavigator()

const PostAuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Play"
          component={PlayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Lobby"
          component={Lobby}
        />
        <Stack.Screen 
          name="Rules"
          component={Rules}
        />
        <Stack.Screen 
          name="Settings"
          component={SettingsScreen}
        />
        <Stack.Screen 
          name="Change Screen"
          component={ChangeScreen}
        />
        <Stack.Screen 
          name="Post Game"
          component={PostGameScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default PostAuthStack