import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
    const navigation = useNavigation()
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around">
        <View className="flex-row justify-center mt-10">
          <Image
            className="w-96 h-96 shadow"
            source={require("../../assets/images/welcome.jpg")}
          />
        </View>
        <View className="mb-20 mx-5">
          <Text className="text-center text-3xl mb-10 font-bold">Expence Tracker</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("SignIn")} className="bg-green-400 p-3 rounded-full mb-5">
            <Text className="text-center text-white font-bold text-lg">Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("SignUp")} className="p-3 bg-green-400 rounded-full">
            <Text className="text-center text-white font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
