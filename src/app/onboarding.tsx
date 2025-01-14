import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Swiper from 'react-native-swiper';
import { useRouter } from 'expo-router';
const globalStyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
};

const appInfo = {
  sizes: {
    WIDTH: '100%',
    HEIGHT: '100%'
  }
};

const appColors = {
  white: '#FFFFFF'
};

const OnbroadingScreen = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter()

  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={{}}
        loop={false}
        onIndexChanged={num => setIndex(num)}
        index={index}
        activeDotColor={appColors.white}>
        <Image
          source={require('../assets/images/onboarding-1.png')}
          //@ts-ignore
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../assets/images/onboarding-2.png')}
          //@ts-ignore
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../assets/images/onboarding-3.png')}
          //@ts-ignore
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
      </Swiper>
      <View
        style={[
          {
            paddingHorizontal: 16,
            paddingVertical: 20,
            position: 'absolute',
            bottom: 20,
            right: 20,
            left: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <TouchableOpacity onPress={() => router.navigate('/(auth)/login')}>
          <Text style={[styles.text]}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : router.navigate('/(auth)/login')
          }>
          <Text style={[styles.text]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnbroadingScreen;

const styles = StyleSheet.create({
  text: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
