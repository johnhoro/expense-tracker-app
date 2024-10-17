import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      className="bg-blue-500 p-4 rounded-lg"
      onPress={onPress}
    >
      <Text className="text-white text-center">{title}</Text>
    </TouchableOpacity>
  );
}
