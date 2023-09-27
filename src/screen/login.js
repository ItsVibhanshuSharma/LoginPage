import React from 'react';
import {Button, Text, View} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
export default function login() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View>
      <Text>Login </Text>

      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}
