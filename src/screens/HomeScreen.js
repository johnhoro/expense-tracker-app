import { View, Text, Button } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl">Home Screen</Text>
      <Button
        title="Login Screen"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
