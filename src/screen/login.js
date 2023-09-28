import React from 'react';
import {
  Button,
  Image,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeInRight,
} from 'react-native-reanimated';
export default function login() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View>
      <View>
        <Image
          source={require('../../assets/images/background.png')}
          style={{width: '100%', height: 860, position: 'relative'}}
        />
      </View>
      <View style={{position: 'absolute'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <Animated.Image
            entering={FadeInUp.delay(400).duration(1000).springify()}
            source={require('../../assets/images/light.png')}
            style={{width: 100, height: 225}}
          />

          <Animated.Image
            entering={FadeInUp.delay(600).duration(1000).springify()}
            source={require('../../assets/images/light.png')}
            style={{width: 100, height: 225}}
          />
        </View>

        <View>
          <Animated.Text
            entering={FadeInUp.delay(600).duration(1000).springify()}
            style={{
              fontSize: 42,
              fontWeight: 'bold',
              color: 'white',
              alignSelf: 'center',
              marginTop: 30,
            }}
          >
            Login
          </Animated.Text>
        </View>

        <View
          style={{
            marginTop: '50%',
            width: '80%',
            marginStart: 20,
          }}
        >
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
          >
            <TextInput
              placeholder="Enter a name"
              style={{
                backgroundColor: 'grey',
                width: '100%',
                borderRadius: 20,
                padding: 20,
                justifyContent: 'center',
              }}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
          >
            <TextInput
              placeholder="Enter a password"
              style={{
                backgroundColor: 'grey',
                width: '100%',
                borderRadius: 20,
                justifyContent: 'center',
                marginTop: 20,
                padding: 20,
              }}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInRight.delay(600).duration(1000).springify()}
          >
            <Pressable
              style={{
                height: 50,
                backgroundColor: 'lightblue',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <Text style={{fontSize: 20, fontWeight: '800', color: 'white'}}>
                Login
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
