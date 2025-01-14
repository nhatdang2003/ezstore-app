import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'

const HomeTab = () => {
    const router = useRouter()
  return (
    <View>
      <Text>HomeTab</Text>
      <Button title='Logout' onPress={async()=>{
        await AsyncStorage.clear()
        router.navigate('/(auth)/login')
        }}/>
    </View>
  )
}

export default HomeTab