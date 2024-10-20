import { View,Button, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function BackButton() {
  const navigation = useNavigation()
  const handleBackButton=()=>{
    navigation.navigate("Home")
  }
  return (
        <Button
          title="Back"
          onPress={handleBackButton}
        /> 
    // <TouchableOpacity onPress={handleBackButton}>
    //    <Text>Back</Text>
    // </TouchableOpacity>
  )
}