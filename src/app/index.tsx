import { ImageBackground, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'

const SplashScreen = () => {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken')
        
        setTimeout(() => {
          if (accessToken) {
            router.replace('/(tabs)')
          } else {
            router.replace('/onboarding')
          }
        }, 2000)
      } catch (error) {
        console.error('Error checking auth:', error)
        router.replace('/onboarding')
      }
    }

    checkAuth()
  }, [])

  return (
    <ImageBackground source={require('../assets/images/splash-img.png')}
    style={{flex:1,justifyContent:'center',alignItems:'center'}}
    imageStyle={{flex:1}}>
        <Image source={require('../assets/images/logo.png')} 
        style={{width:'70%',resizeMode:'contain'}}/>
        <ActivityIndicator color='#cecece' size={22}/>
    </ImageBackground>
  )
}

export default SplashScreen